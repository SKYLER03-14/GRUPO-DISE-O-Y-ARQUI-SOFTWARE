const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

function requireAuth(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Falta token' })
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = { id: payload.sub, role: payload.role }
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' })
  }
}

module.exports = { requireAuth }
