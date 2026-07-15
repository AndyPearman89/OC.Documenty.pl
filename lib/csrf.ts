import { randomBytes } from 'crypto'

const CSRF_TOKEN_LENGTH = 32
const CSRF_COOKIE_NAME = 'csrf-token'
const CSRF_HEADER_NAME = 'x-csrf-token'

export function generateCSRFToken(): string {
  return randomBytes(CSRF_TOKEN_LENGTH).toString('hex')
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) {
    return false
  }
  return token === sessionToken
}

export function createCSRFMiddleware() {
  return (req: Request) => {
    const method = req.method.toUpperCase()

    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
      return true
    }

    const csrfToken = req.headers.get(CSRF_HEADER_NAME)
    const cookies = req.headers.get('cookie') || ''
    const sessionToken = extractCookie(cookies, CSRF_COOKIE_NAME)

    return validateCSRFToken(csrfToken || '', sessionToken || '')
  }
}

function extractCookie(cookies: string, name: string): string | null {
  const value = `; ${cookies}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null
  }
  return null
}
