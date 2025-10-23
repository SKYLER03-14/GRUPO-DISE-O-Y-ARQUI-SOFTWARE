require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')
const db = require('./filedb')
const { requireAuth } = require('./middlewares')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET || 'cambia-esto'

// Health
app.get('/health', (req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() })
})

// Auth: Register
app.post('/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {}
  if (!name || !email || !password) return res.status(400).json({ error: 'name, email, password requeridos' })

  const data = db.read()
  const exists = data.users.find(u => u.email === email)
  if (exists) return res.status(409).json({ error: 'Email ya registrado' })

  const passwordHash = await bcrypt.hash(password, 10)
  const user = { id: uuidv4(), name, email, passwordHash, role: 'USER', createdAt: new Date().toISOString() }
  data.users.push(user)
  db.write(data)

  res.status(201).json({ id: user.id, name: user.name, email: user.email })
})

// Auth: Login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'email y password requeridos' })

  const data = db.read()
  const user = data.users.find(u => u.email === email)
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })
  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' })

  const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token })
})

// Users: me
app.get('/users/me', requireAuth, (req, res) => {
  const data = db.read()
  const user = data.users.find(u => u.id === req.user.id)
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
  const { id, name, email, role, createdAt } = user
  res.json({ id, name, email, role, createdAt })
})

// Donations: create
app.post('/donations', requireAuth, (req, res) => {
  const { amount, message } = req.body || {}
  if (!Number.isInteger(amount) || amount <= 0) return res.status(400).json({ error: 'amount debe ser entero positivo' })

  const data = db.read()
  const donation = {
    id: uuidv4(),
    amount,
    message: message || null,
    donorId: req.user.id,
    createdAt: new Date().toISOString()
  }
  data.donations.push(donation)
  db.write(data)
  res.status(201).json(donation)
})

// Donations: list mine
app.get('/donations/my', requireAuth, (req, res) => {
  const data = db.read()
  const list = data.donations.filter(d => d.donorId === req.user.id).sort((a,b) => b.createdAt.localeCompare(a.createdAt))
  res.json(list)
})

// 404
app.use((req, res) => res.status(404).json({ error: 'Not Found' }))

app.listen(PORT, () => console.log(`[server] http://localhost:${PORT}`))
