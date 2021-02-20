<template>
  <div ref="chartDom" class="chart"></div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts';
const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';


export default {
  mounted(){
    this.init()
  },
  methods:{
    init(){
      var chartDom = this.$refs.chartDom;
      var myChart = echarts.init(chartDom, 'dark');
      var option;
      myChart.showLoading();
      axios.get(ROOT_PATH + '/data/asset/data/les-miserables.json').then(res=>{
        const graph = res.data
        myChart.hideLoading();
        console.log(graph.data,'chartDom')
        // console.log(graph,"graph")
        graph.nodes.forEach(function (node) {
            node.label = {
                show: node.symbolSize > 30
            };
        });
      option = {
          title: {
              text: 'Les Miserables',
              subtext: 'Default layout',
              top: 'bottom',
              left: 'right'
          },
          tooltip: {},
          legend: [{
              // selectedMode: 'single',
              data: graph.categories.map(function (a) {
                  return a.name;
              })
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
              {
                  name: 'Les Miserables',
                  type: 'graph',
                  layout: 'none',
                  data: graph.nodes,
                  links: graph.links,
                  categories: graph.categories,
                  roam: true,
                  label: {
                      position: 'right',
                      formatter: '{b}'
                  },
                  lineStyle: {
                      color: 'source',
                      curveness: 0.3
                  },
                  emphasis: {
                      focus: 'adjacency',
                      lineStyle: {
                          width: 10
                      }
                  }
              }
          ]
      };
      myChart.setOption(option);
      })
      // option && myChart.setOption(option);
    }
  }
}
</script>

<style lang='scss' scoped>
.chart{
  width: 100%;
  height: 100%;
}
</style>
