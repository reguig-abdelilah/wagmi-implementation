import { EventEmitter } from "events";

const eventBus = new EventEmitter()


export const EVENTS = {
    OPEN_WALLET_MODEL: 'OPEN_WALLET_MODEL',
    CLOSE_WALLET_MODEL: 'CLOSE_WALLET_MODEL'
}   

export default eventBus