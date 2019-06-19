const chartOptions = (data) => {
  const findMinMax = (arr, field) => {
    let min = 0;
    let max = 0;
    if (typeof arr !== 'undefined' && arr.length > 1) {
      min = Number(arr[0][field]);
      max = Number(arr[0][field]);
      for (let i = 0; i < arr.length; i += 1) {
        const v = Number(arr[i][field]);
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
      }
    }

    return [min, max];
  };

  const Xminmax = findMinMax(data.value, 'x');
  const Yminmax = findMinMax(data.value, 'y');
  const Xmin = Xminmax[0];
  let Xmax = Xminmax[1];
  const Ymin = Yminmax[0];
  let Ymax = Yminmax[1];

  const DeltaX = Xmax - Xmin;
  const DeltaY = Ymax - Ymin;

  const DeltaMax = Math.max(DeltaX, DeltaY);

  Xmax = Xmin + DeltaMax;
  Ymax = Ymin + DeltaMax;

  return {
    showLines: true,
    animation: false,
    legend: {
      display: true
    },
    tooltips: {
      callbacks: {
        label: (t) => {
          const numx = t.xLabel.toFixed(3);
          const numy = t.yLabel.toFixed(3);
          const label = `X: ${numx} Y : ${numy}`;
          return label;
        }
      }
    },
    elements: {
      point: { radius: 1 }
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: Xmin,
          max: Xmax,
          // stepSize: DeltaMax
        },
        scaleLabel: {
          display: true,
          labelString: `${data.axisName.x}(${data.unit.x})`
        }
      }],
      yAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: Ymin,
          max: Ymax,
          // stepSize: DeltaMax
        },
        scaleLabel: {
          display: true,
          labelString: `${data.axisName.y}(${data.unit.y})`
        }
      }]
    }
  };
};

export default chartOptions;
