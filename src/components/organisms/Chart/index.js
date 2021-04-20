import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {dataChartBySiteAndDate} from '@actions/chartActions';

const ChartData = () => {
  const chartData = useSelector((state) => state.chart.chartData);
  const dispatch = useDispatch();

  const data = {
    reqSite: 'ktlmp',
    start: moment().add(7, 'hours').subtract(5, 'days'),
    end: moment().add(7, 'hours'),
  };
  //   React.useEffect(() => {
  //     dispatch(dataChartBySiteAndDate(data));
  //   }, []);
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 40,
      }}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={320}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 2,
          color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'red',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChartData;
