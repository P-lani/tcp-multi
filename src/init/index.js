import pools from '../db/database.js';
import { addGameSession } from '../sessions/game.session.js';
import testConnection from '../utils/db/testConnection.js';
import { loadProtos } from './loadProto.js';
import { v4 as uuidv4 } from 'uuid';

const initServer = async () => {
    try {
        await loadProtos();
        const gameId = uuidv4();
        const gameSeesion = addGameSession(gameId);
        console.log(gameSeesion);

        await testConnection(pools);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

export default initServer;
