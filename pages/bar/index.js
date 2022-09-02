const _Page = require("../../__antmove/component/componentClass.js")("Page");
import * as echarts from "../../ec-canvas/echarts";
let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [50, 400, 50, 80, 70, 110, 130],
        type: "bar"
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

_Page({
  onShareAppMessage: function(res) {
    return {
      title: "ECharts 可以在微信小程序中使用啦！",
      path: "/pages/index/index",
      success: function() {},
      fail: function() {}
    };
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function() {
      // 获取 chart 实例的方式
      console.log(chart);
    }, 2000);
  }
});
