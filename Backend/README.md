# Backend Simple (Express + archivo JSON)

Sencillo para curso y fácil de entender. No usa TypeScript ni bases de datos externas.
Guarda datos en `./data/db.json` para que veas todo claro.

## Pasos
```bash
npm install
copy .env.example .env  # o crea .env
npm start
```

Endpoints:
- `GET /health`
- `POST /auth/register` `{ name, email, password }`
- `POST /auth/login` `{ email, password }` -> { token }
- `GET /users/me` (Bearer token)
- `POST /donations` `{ amount(Int), message? }` (Bearer token)
- `GET /donations/my` (Bearer token)

## Notas
- Base para que luego migremos a una BD real (MySQL/Postgres) si el profe lo pide.
- El archivo `data/db.json` se crea solo la primera vez.
