interface RateLimitStore {
  [key: string]: { count: number; resetTime: number }
}

const store: RateLimitStore = {}

export interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  keyGenerator?: (req: Request) => string
}

const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000,
  maxRequests: 100,
  keyGenerator: (req: Request) => {
    const ip = req.headers.get('x-forwarded-for') ||
               req.headers.get('x-real-ip') ||
               'unknown'
    return `${ip}-${req.method}-${new URL(req.url).pathname}`
  },
}

export function createRateLimiter(config: Partial<RateLimitConfig> = {}) {
  const finalConfig = { ...defaultConfig, ...config }

  return (req: Request): boolean => {
    const key = finalConfig.keyGenerator!(req)
    const now = Date.now()

    if (!store[key]) {
      store[key] = { count: 1, resetTime: now + finalConfig.windowMs }
      return true
    }

    const record = store[key]

    if (now > record.resetTime) {
      record.count = 1
      record.resetTime = now + finalConfig.windowMs
      return true
    }

    record.count++
    return record.count <= finalConfig.maxRequests
  }
}

export function cleanupRateLimitStore() {
  const now = Date.now()
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  }
}

setInterval(cleanupRateLimitStore, 60 * 1000)
