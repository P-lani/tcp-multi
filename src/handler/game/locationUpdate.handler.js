import { getGameSession } from '../../sessions/game.session.js';
import { getAllUser } from '../../sessions/user.session.js';

let time = 0;

const locationUpdateHandler = ({ socket, userId, payload }) => {
    try {
        const { x, y } = payload;
        const gameSession = getGameSession();

        time++;
        if (time > 100 * (gameSession.users.length + 1)) {
            time = 0;
            console.log(gameSession);
        }

        if (!gameSession) {
            console.error('Game Session not found');
        }

        const user = gameSession.getUser(userId);

        if (!user) {
            console.error('User not found');
        }

        user.updatePosition(x, y);

        const locationData = gameSession.getAllLocation(userId);
        socket.write(locationData);
    } catch (e) {
        console.error(e);
    }
};

export default locationUpdateHandler;
