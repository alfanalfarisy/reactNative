import {BASE_URL} from '@utils/constanta';
import store from '../store';
// eslint-disable-next-line no-unused-vars
// import io from 'socket.io-client';
import moment from 'moment';
const axios = require('axios');
// const socket = io('http://localhost:4000');

export const dataChartBySiteAndDate = (data) => () => {
  return new Promise((resolve, reject) => {
    console.log(data);
    axios
      .get(
        `${BASE_URL}/api/dps/bysite&date/${data.reqSite}/${data.start}/${data.end}`,
      )
      .then((response) => {
        const tma = [];
        const vair = [];
        const ch = [];

        response.data.all.map((data) => {
          const x = moment(data.dt).format('YYYY-MM-DD hh:mm:ss');
          tma.push({y: data.tma[0], x: x});
          ch.push({y: data.ch[0], x: x});
          vair.push({y: data.vair[0], x: x});
        });
        const chartData = {tma, vair, ch};
        return store.dispatch({
          type: 'CHANGE_CHART',
          value: chartData,
        });
      })
      .catch((err) => {
        var errCode = err.code;
        var errMessage = err.message;
        console.log(errCode, errMessage);
        reject(err);
      });
  });
};

export const reqSite = (data) => () => {
  return store.dispatch({
    type: 'CHANGE_REQSITE',
    value: data,
  });
};

// socket.on('dpsUpdateByReqSite', (msg) => {
//   store.dispatch({
//     type: 'CHANGE_UPDATECHART',
//     value: msg.data,
//   });
// });
