const fs = require('fs')
const path = require('path')
const DB_PATH = path.join(__dirname, 'data', 'db.json')

function ensureFile() {
  if (!fs.existsSync(path.dirname(DB_PATH))) fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], donations: [] }, null, 2))
}

function read() {
  ensureFile()
  const raw = fs.readFileSync(DB_PATH, 'utf-8')
  return JSON.parse(raw || '{"users":[],"donations":[]}')
}

function write(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

module.exports = { read, write }
