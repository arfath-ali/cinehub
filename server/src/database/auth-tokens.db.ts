import { pool } from './pool.db.js';

export async function syncAuthTokenSchema() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS auth_tokens(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
        token TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMPTZ NOT NULL
        )`);
    console.log('✅ Auth tokens schema synchronized');
  } catch (error) {
    console.error('❌ Error setting up auth_tokens table: ', error);
    process.exit(1);
  }
}
