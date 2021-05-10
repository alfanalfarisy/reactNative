import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {dataChartBySiteAndDate} from '@actions/chartActions';

const LineChartK = () => {
  const chartData = useSelector((state) => state.chart.chartData);
  const dispatch = useDispatch();

  const data = {
    reqSite: 'ktlmp',
    start: moment().add(7, 'hours').subtract(5, 'days'),
    end: moment().add(7, 'hours'),
  };

  const dataSet = {
    labels: ['00', '01', '02', '03', '04', '05'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 100, ${opacity})`, // optional
        strokeWidth: 2, // optional
        legendFontSize: 15,
      },
      {
        data: [30, 15, 38, 40, 59, 13],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ],
    legend: ['Val 1', 'Val 2'], // optional
  };

  return (
    <View
      style={
        {
          // marginHorizontal: 20,
          // marginTop: 40,
        }
      }>
      <ScrollView
        horizontal={true}
        contentOffset={{x: 5000, y: 0}} // i needed the scrolling to start from the end not the start
        showsHorizontalScrollIndicator={false} // to hide scroll bar
      >
        <LineChart
          data={dataSet}
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').height - 70}
          yAxisSuffix="C"
          yAxisLabel="$"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '2',
              strokeWidth: '2',
              stroke: 'red',
            },
          }}
          bezier
          style={{
            backgroundColor: 'blue',
            // marginVertical: 8,
            borderRadius: 16,
          }}
          withVerticalLines
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LineChartK;
