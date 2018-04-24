
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class About extends Component {
  getOption() {
    return {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    };
  
  }
  onChartReadyCallback() {

  }
  render() {
    return <div class="chart-container">
      <ReactEcharts
        option={this.getOption()}
        onChartReady={this.onChartReadyCallback}
      />
    </div>
  }
}