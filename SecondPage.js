import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories = [
      {
        category: [
          {label: 'A(P1)'},
          {label: 'A(P2)'},
          {label: 'B(P1)'},
          {label: 'B(P2)'},
        ],
      },
    ];
    //Construct the dataset comprising multiple series
    const dataset = [
      {
        seriesname: 'Curr Vol',
        data: [{value: '10'}, {value: '20'}, {value: '30'}, {value: '40'}],
      },
      {
        seriesname: 'Prev Vol',
        data: [{value: '40'}, {value: '30'}, {value: '20'}, {value: '10'}],
      },
      {
        seriesname: 'Vol Chg',
        data: [
          {value: '-0.75'},
          {value: '-0.33333333'},
          {value: '0.5'},
          {value: '3'},
        ],
      },
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: 'mscolumn2d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          theme: 'fusion',
          caption: 'Customer Product Chart',
          xAxisname: 'Customer(Product)',
          yAxisName: 'Volume',
          plotFillAlpha: '80',
          divLineIsDashed: '1',
          divLineDashLen: '1',
          divLineGapLen: '1',
        },
        categories: categories,
        dataset: dataset,
      },
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: 'file:///android_asset/fusioncharts.html',
      },
      ios: require('./assets/fusioncharts.html'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>FusionChart</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },

  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1,
  },
});
