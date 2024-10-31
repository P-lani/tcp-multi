import { DB2_HOST, DB2_NAME, DB2_PASSWORD, DB2_PORT, DB2_USER } from '../constants/env.js';

export const config = {
    databases: {
        USER_DB: {
            name: DB2_NAME,
            host: DB2_HOST,
            password: DB2_PASSWORD,
            port: DB2_PORT,
            user: DB2_USER,
        },
    },
};
