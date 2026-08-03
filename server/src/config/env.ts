import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/swap_db?schema=public',
  JWT_SECRET: process.env.JWT_SECRET || 'supersecret_jwt_key',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
};
