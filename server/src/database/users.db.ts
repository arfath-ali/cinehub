import { pool } from './pool.db.js';

export async function syncUsersSchema() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users(
        user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),

        full_name VARCHAR(128) NOT NULL,
        country TEXT NOT NULL,
        profile_image_url TEXT,

        google_id VARCHAR(255) UNIQUE,
        is_verified BOOLEAN DEFAULT FALSE,

        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        )`);
    console.log('✅ Users schema synchronized');
  } catch (error) {
    console.error('❌ Error setting up users table: ', error);
    process.exit(1);
  }
}
