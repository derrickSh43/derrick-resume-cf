type Bucket = {
  count: number;
  resetAt: number;
};

const burstWindowMs = 60_000;
const burstLimit = 10;
const dailyWindowMs = 86_400_000;
const dailyLimit = 80;
const cooldownMs = 300_000;
const abuseThreshold = 30;

const burstBuckets = new Map<string, Bucket>();
const dailyBuckets = new Map<string, Bucket>();
const cache = new Map<string, { value: unknown; expiresAt: number }>();
const cooldowns = new Map<string, number>();
let globalSpike = 0;
let globalSpikeResetAt = Date.now() + burstWindowMs;

function hitBucket(store: Map<string, Bucket>, key: string, windowMs: number) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    const fresh = { count: 1, resetAt: now + windowMs };
    store.set(key, fresh);
    return fresh;
  }

  current.count += 1;
  return current;
}

export function checkRateLimit(key: string) {
  const now = Date.now();
  const cooldownUntil = cooldowns.get(key);
  if (cooldownUntil && cooldownUntil > now) {
    return { ok: false, status: 429, message: "Too many requests right now. Please try again shortly." };
  }

  if (globalSpikeResetAt <= now) {
    globalSpike = 0;
    globalSpikeResetAt = now + burstWindowMs;
  }

  globalSpike += 1;
  if (globalSpike > abuseThreshold) {
    cooldowns.set(key, now + cooldownMs);
    return { ok: false, status: 429, message: "Too many requests right now. Please try again shortly." };
  }

  const burst = hitBucket(burstBuckets, key, burstWindowMs);
  if (burst.count > burstLimit) {
    cooldowns.set(key, now + cooldownMs);
    return { ok: false, status: 429, message: "Too many requests right now. Please try again shortly." };
  }

  const daily = hitBucket(dailyBuckets, key, dailyWindowMs);
  if (daily.count > dailyLimit) {
    return { ok: false, status: 429, message: "Daily question limit reached for this session or IP." };
  }

  return { ok: true };
}

export function getCached<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;
  if (cached.expiresAt <= Date.now()) {
    cache.delete(key);
    return null;
  }
  return cached.value as T;
}

export function setCached(key: string, value: unknown, ttlMs = 3_600_000) {
  cache.set(key, { value, expiresAt: Date.now() + ttlMs });
}
