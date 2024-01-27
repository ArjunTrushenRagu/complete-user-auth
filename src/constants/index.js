import { config } from 'dotenv';

config(); // instantiate function to pull in all environment variables to the application 

export const DB = process.env.APP_DB;
export const DOMAIN = process.env.APP_DOMAIN;
export const SECRET = process.env.APP_SECRET;
export const SENDGRID_API = process.env.APP_SENDGRID_API; 
export const PORT = process.env.PORT || process.env.APP_PORT;

