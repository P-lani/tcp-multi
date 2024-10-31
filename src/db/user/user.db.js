import { toCamelCase } from '../../utils/transformCase.js';
import pools from '../database.js';
import { USER_QUERIES } from './user.queries.js';

const pool = pools.USER_DB;

export const findUserByDeviceId = async (deviceId) => {
    const [rows] = await pool.query(USER_QUERIES.FIND_USER_BY_DEVICE_ID, [deviceId]);
    return toCamelCase(rows[0]);
};

export const createUser = async (deviceId) => {
    await pool.query(USER_QUERIES.CREATE_USER, [deviceId]);
    return { deviceId };
};

export const updateUserLogin = async (deviceId) => {
    try {
        await pool.query(USER_QUERIES.UPDATE_USER_LOGIN, [deviceId]);
    } catch (e) {
        console.error('updateUserLogin Error', e);
    }
};

export const updateUserLocation = async (x, y, deviceId) => {
    try {
        console.log('DB 갱신 : 유저 위치');
        await pool.query(USER_QUERIES.UPDATE_USER_LOCATION, [x, y, deviceId]);
    } catch (e) {
        console.error('updateUserLocation Error', e);
    }
};
