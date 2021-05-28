import * as dotenv from 'dotenv';
dotenv.config();

export default {
    api:{
        host: process.env.HOST || 'http://localhost',
        port: process.env.API_PORT || 3000,
        dev: process.env.NODE_ENV
    }
}