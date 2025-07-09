import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();

app.get('/', async (_req, res) => {
  const { rows } = await pool.query('SELECT NOW() AS now');
  res.send(`🚀 Node 22 says hi! Time at DB is ${rows[0].now}`);
});

app.listen(3000, () => console.log('Listening on port 3000'));
