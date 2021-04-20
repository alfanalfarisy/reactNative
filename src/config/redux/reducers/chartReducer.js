const initialState = {
  chartData: {},
  reqSite: 'ktlmp',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CHART':
      return {
        ...state,
        chartData: action.value,
      };
    case 'CHANGE_UPDATECHART': {
      //   const updateData = action.value[0];
      //   if (state.chart.data.length != 0) {
      //     const newDataX = [updateData.dt].concat(state.chart.data[0].x);
      //     const newDataTma = [upda  teData.tma[0]].concat(state.chart.data[0].y);
      //     const newDataCh = [updateData.vair[0]].concat(state.chart.data[1].y);
      //     const newDataVair = [updateData.ch[0]].concat(state.chart.data[2].y);
      //     state.chart.data[0].x = newDataX;
      //     state.chart.data[1].x = newDataX;
      //     state.chart.data[2].x = newDataX;
      //     state.chart.data[0].y = newDataTma;
      //     state.chart.data[1].y = newDataCh;
      //     state.chart.data[2].y = newDataVair;
      //     return {
      //       ...state,
      //       chart: {
      //         data: [
      //           {name: 'tma', type: 'scatter', x: newDataX, y: newDataTma},
      //           {name: 'ch', type: 'scatter', x: newDataX, y: newDataCh},
      //           {name: 'vair', type: 'scatter', x: newDataX, y: newDataVair},
      //         ],
      //       },
      //     };
      //   }
      //   // {
      //   //   state,
      //   //   chart: { ...state.chart.data, data: action.value },
      //   // };
      // }
      // case 'CHANGE_REQSITE':
      //   return {
      //     ...state,
      //     reqSite: action.value,
    }
  }
  return state;
}
