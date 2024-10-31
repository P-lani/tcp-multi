import { HANDLER_IDS } from '../constants/handlerIds.js';
import locationUpdateHandler from './game/locationUpdate.handler.js';
import userHandler from './user/user.handler.js';

const handlers = {
    [HANDLER_IDS.INITIAL]: {
        protoType: 'initial.InitialPayload',
        userHandler: userHandler,
    },
    [HANDLER_IDS.LOCATION_UPDATE]: {
        protoType: 'game.LocationUpdatePayload',
        userHandler: locationUpdateHandler,
    },
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
    if (!handlers[handlerId]) {
        throw Error();
    }

    return handlers[handlerId].protoType;
};

export const getHandlerById = (handlerId) => {
    if (!handlers[handlerId]) {
        throw Error();
    }

    return handlers[handlerId].userHandler;
};
