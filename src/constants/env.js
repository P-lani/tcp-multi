import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.HOST || 'localhost';
export const PORT = process.env.PORT || '5555';
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0';

export const DB2_NAME = process.env.DB2_NAME || 'user_db';
export const DB2_USER = process.env.DB2_USER;
export const DB2_PASSWORD = process.env.DB2_PASSWORD;
export const DB2_HOST = process.env.DB2_HOST || 'localhost';
export const DB2_PORT = process.env.DB2_PORT || '3306';
