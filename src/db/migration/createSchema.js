import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pools from '../database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const executeSqlFile = async (pool, filePath) => {
    const sql = fs.readFileSync(filePath, 'utf8');
    const quereis = sql
        .split(';')
        .map((query) => query.trim())
        .filter((query) => query.length > 0);

    for (const query of quereis) {
        await pool.query(query);
    }
};

const createSchemas = async () => {
    const sqlDir = path.join(__dirname, '../sql');

    try {
        await executeSqlFile(pools.USER_DB, path.join(sqlDir, 'user_db.sql'));
    } catch (e) {
        console.error(`데이터 베이스 테이블 생성 중 오류가 발생했습니다. ${e}`);
    }
};

createSchemas()
    .then(() => {
        console.log(`마이그레이션 완료`);
    })
    .catch((e) => {
        console.error(`마이그레이션 에러`, e);
    });
