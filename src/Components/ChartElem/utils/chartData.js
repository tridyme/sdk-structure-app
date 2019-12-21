const chartData = (data) => {
  return {
    labels: ['Scatter'],
    datasets: [{
      label: data.chartTitle,
      type: 'scatter',
      data: data.value,
      backgroundColor: [
        'rgba(0,191,255, 0.2)'
      ],
      borderColor: [
        'rgba(30,144,255,1)'
      ],
      borderWidth: 3,
      lineTension: 0,
      showLine: true,
      fill: 1
    }]
  };
};

export default chartData;
