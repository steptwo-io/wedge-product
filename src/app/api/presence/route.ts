// Simple in-memory presence tracking for active users.
// For production, replace with Redis or a persistent store shared across instances.

import { NextRequest } from "next/server";

type PresenceStore = {
  clients: Map<string, number>; // clientId -> lastSeen epoch ms
};

const globalForPresence = globalThis as unknown as {
  __presence?: PresenceStore;
};

const presence: PresenceStore =
  globalForPresence.__presence ?? { clients: new Map<string, number>() };

if (!globalForPresence.__presence) {
  globalForPresence.__presence = presence;
}

function cleanupAndCount(now: number, windowMs = 60_000): number {
  for (const [clientId, lastSeen] of presence.clients.entries()) {
    if (now - lastSeen > windowMs) {
      presence.clients.delete(clientId);
    }
  }
  return presence.clients.size;
}

export async function GET() {
  const now = Date.now();
  const count = cleanupAndCount(now);
  return Response.json({ activeUsers: count, now });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const clientId = (body?.clientId as string | undefined)?.slice(0, 128);
    const now = Date.now();
    if (clientId) {
      presence.clients.set(clientId, now);
    }
    const count = cleanupAndCount(now);
    return Response.json({ activeUsers: count, now });
  } catch {
    return new Response("Bad Request", { status: 400 });
  }
}


