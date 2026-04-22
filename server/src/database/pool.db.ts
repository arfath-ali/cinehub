import pkg from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function checkDatabaseConnection() {
  try {
    const res = await pool.query('SELECT current_database() AS db_name');
    const dbName = res.rows[0].db_name;
    console.log(`✅ Database connected to [${dbName}]`);
  } catch (error) {
    console.error('❌ Database connection error: ', error);
    process.exit(1);
  }
}
