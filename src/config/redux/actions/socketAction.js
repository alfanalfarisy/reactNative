import IO from 'socket.io-client';
import {BASE_URL} from '../../../utils/constanta';
const socket = IO(`${BASE_URL}`, {
  forceNew: true,
});
socket.on('connection', () => console.log('Connection'));

export const SendMessageSocketAction = (msg) => () => {
  socket.emit('newMessage', 'msg');
};
