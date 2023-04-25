
import './App.css';
import ReactECharts from 'echarts-for-react';
import useChart from './chart/useChart';
import data from './chart/data';

function App() {
  const { options: lineChart } = useChart(
    {
      type: "line",
      xAxis: {
        type: 'category',
        data: data.map((each) => each.Flavanoids),
        name: "Flavanoids",

      },
      yAxis: {
        type: 'value',
        data: data.map((each) => each.Ash),
        name: "Ash",
      },
      series: [
        {
          data: data.map((each) => each.Ash),
          type: 'line',
          smooth: true,
        },
      ],

    }

  )
  const { options: barChart } = useChart(
    {
      type: "line",
      xAxis: {
        type: 'category',
        name: "Magnesium",
        data: data.map((each) => each.Magnesium),

      },
      yAxis: {
        type: 'value',
        name: "Alcohol",
        data: data.map((each) => each.Alcohol),

      },
      series: [
        {
          data: data.map((each) => each.Alcohol),
          type: 'bar',
          smooth: true,
        },
      ],

    }

  )

  return (
    <div className="App">
      <h1>Line Char</h1>

      <ReactECharts option={lineChart} />;
      <h1>Bar Char</h1>

      <ReactECharts option={barChart} />;
    </div>
  );
}

export default App;
