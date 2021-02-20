<template>
  <div ref="chartDom" class="chart"></div>
</template>

<script>
import * as echarts from 'echarts'

const colors = [
  {
    c1: '#00c7ef',
    c2: '#0AF3FF'
  },
  {
    c1: '#FF8E14',
    c2: '#FFA12F'
  },
  {
    c1: '#AF5AFF',
    c2: '#B62AFF'
  },
  {
    c1: '#25dd59',
    c2: '#29f463'
  },
  {
    c1: '#6E35FF',
    c2: '#6E67FF'
  },
  {
    c1: '#002AFF',
    c2: '#0048FF'
  },
  {
    c1: '#8CD282',
    c2: '#95F300'
  },
  {
    c1: '#3B0EFF',
    c2: '#604BFF'
  },
  {
    c1: '#00BE74',
    c2: '#04FDB8'
  },
  {
    c1: '#4a3ac6',
    c2: '#604BFF'
  }
]
export default {
  data() {
    return {
      listData: [],
      list: [],
      links: [],
      legend: [],
      categories: [],
      legendColor: colors.map((item) => item.c2)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var chartDom = this.$refs.chartDom
      var myChart = echarts.init(chartDom, 'dark', {
        myOpts_: { draggableFixed_: true }
      })
      this.listData = this.getData()
      console.log('this.listData', this.listData)
      this.categories = this.listData[0].list.map((item) => {
        return {
          name: item.name
        }
      })
      this.handle2(JSON.parse(JSON.stringify(this.listData)), 0)
      this.handle3(JSON.parse(JSON.stringify(this.listData)), 0)
      const option = {
        type: 'tree',
        backgroundColor: '#000',
        // 工具栏
        toolbox: {
          show: true,
          left: 'right',
          right: 20,
          top: 'bottom',
          bottom: 20
        },
        //提示框
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          backgroundColor: 'rgba(1,70,86,1)',
          borderColor: 'rgba(0,246,255,1)',
          borderWidth: 0.5,
          textStyle: {
            fontSize: 10
          }
        },
        color: this.legendColor,
        legend: {
          show: true,
          data: this.legend,
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
          // inactiveColor: "#fff",
          icon: 'circle',
          type: 'scroll',
          orient: 'vertical',
          left: 'right',
          right: 20,
          top: 20,
          bottom: 80,
          // itemWidth: 12,
          // itemHeight: 12,
          pageIconColor: '#00f6ff',
          pageIconInactiveColor: '#fff',
          pageIconSize: 12,
          pageTextStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        selectedMode: 'false',
        bottom: 20,
        left: 0,
        right: 0,
        top: 0,
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            // name: '知识图谱',
            type: 'graph',
            hoverAnimation: true,
            layout: 'force',
            force: {
              layoutAnimation: true,
              repulsion: 300,
              edgeLength: 50
            },
            nodeScaleRatio: 0.6,
            draggable: true,
            roam: true,
            symbol: 'circle', //线两端的标记类型
            symbolSize: 10, //线两端的标记大小
            nodePadding: 20,
            animationDurationUpdate: 750,
            expandAndCollapse: true, //子树折叠和展开的交互，默认打开
            initialTreeDepth: 3,
            roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
            focusNodeAdjacency: true,
            data: this.list,
            links: this.links,
            categories: this.categories,
            scaleLimit: {
              //所属组件的z分层，z值小的图形会被z值大的图形覆盖
              min: 0.5, //最小的缩放值
              max: 9 //最大的缩放值
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 8],
            label: {
              normal: {
                show: true,
                position: 'inside',
                color: '#fff',
                // distance: 5,
                fontSize: 6,
                rotate: 0,
                // width:30,
                overflow: 'truncate',
                ellipsis: '...',
                formatter: (val) => {
                  return val.name
                }
              }
            },
            lineStyle: {
              normal: {
                width: 1.5,
                curveness: 0,
                type: 'solid'
              }
            }
          }
        ]
      }
      console.log(option)
      myChart.setOption(option)
      myChart.on('click', function (params) {
        console.log(params)
      })

      // myChart.on('mousemove', function (params) {
      //     console.log(params);
      // });

      myChart.on('legendselectchanged', function (params) {
        console.log(params)
      })

      myChart.on('click', 'series.line', function (params) {
        console.log(params)
      })

      myChart.on('mouseup', (params) => {
        var option = myChart.getOption()
        option.series[0].data[params.dataIndex].x = params.event.offsetX
        option.series[0].data[params.dataIndex].y = params.event.offsetY
        option.series[0].data[params.dataIndex].fixed = true
        myChart.setOption(option)
      })

      myChart.on(
        'mouseover',
        { seriesIndex: 1, name: 'xx' },
        function (params) {
          console.log(params)
        }
      )
    },
    getData() {
      let data = {
        name: '根节点1',
        value: 0,
        list: []
      }
      for (let i = 1; i <= 10; i++) {
        let obj = {
          name: '节点' + i,
          value: i,
          list: []
        }
        for (let j = 1; j <= 5; j++) {
          let obj2 = {
            name: `节点1-${i}-${j}`,
            value: 1 + '-' + i + '-' + j
          }
          if (j % 2 == 1) {
            obj2.list = []
            for (let k = 1; k <= 3; k++) {
              let obj3 = {
                name: `节点1-${i}-${j}-${k}`,
                value: 1 + '-' + i + '-' + j + '-' + k,
                isExpand: false
              }
              obj2.list.push(obj3)
            }
          }
          obj.list.push(obj2)
        }

        data.list.push(obj)
      }
      var arr = []
      arr.push(data)
      //   arr=handle(arr,0)
      return arr
    },
    handle2(arr, idx, color, category) {
      arr.forEach((item, index) => {
        if (item.name === null) {
          return false
        }
        // 设置节点大小
        let symbolSize = 30
        switch (idx) {
          case 0:
            symbolSize = 70
            break
          case 1:
            symbolSize = 50
            break
          default:
            symbolSize = 30
            break
        }

        // 每个节点所对应的文本标签的样式。
        let label = null
        switch (idx) {
          case 0:
          case 1:
            label = {
              position: 'inside',
              rotate: 0
            }
            break
          default:
            break
        }

        //计算出颜色,从第二级开始
        if (idx === 0) {
          color = colors[0]
        }
        if (idx == 1) {
          color = colors.find((itemm, eq) => eq == index % 10)
          this.legend.push(item.name)
        }
        // 设置线条颜色
        let lineStyle = {
          color: color.c2
        }
        // 设置节点样式
        let bgcolor = null
        if (idx === 0) {
          bgcolor = {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: color.c1 // 0% 处的颜色
              },
              {
                offset: 0.8,
                color: color.c1 // 80% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 0, 0, 0.3)' // 100% 处的颜色
              }
            ],
            global: false
          }
        } else {
          bgcolor = {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: color.c1 // 0% 处的颜色
              },
              {
                offset: 0.4,
                color: color.c1 // 0% 处的颜色
              },
              {
                offset: 1,
                color: color.c2 // 100% 处的颜色
              }
            ],
            global: false
          }
        }
        let itemStyle = null
        if (item.list && item.list.length !== 0) {
          //非子节点
          itemStyle = {
            borderColor: color.c2,
            color: bgcolor
          }
        } else {
          //子节点
          item.isEnd = true
          if (item.isdisease == 'true') {
            itemStyle = {
              color: color.c2,
              borderColor: color.c2
            }
          } else {
            itemStyle = {
              color: 'transparent',
              borderColor: color.c2
            }
          }
        }
        //可以改变来实现节点发光效果，但体验不好
        itemStyle = Object.assign(itemStyle, {
          shadowColor: 'rgba(255, 255, 255, 0.5)',
          shadowBlur: 10
        })

        if (idx == 1) {
          category = item.name
        }
        let obj = {
          name: item.name,
          symbolSize: symbolSize,
          category: category,
          label,
          color: bgcolor,
          itemStyle,
          lineStyle
        }
        obj = Object.assign(item, obj)
        if (idx === 0) {
          obj = Object.assign(obj, {
            root: true
          })
        }
        if (item.list && item.list.length === 0) {
          obj = Object.assign(obj, {
            isEnd: true
          })
        }
        this.list.push(obj)
        if (item.list && item.list.length > 0) {
          this.handle2(item.list, idx + 1, color, category)
        }
      })
    },
    handle3(arr, index, color) {
      arr.forEach((item) => {
        if (item.list) {
          item.list.forEach((item2, eq) => {
            if (index === 0) {
              color = colors.find((itemm, eq2) => eq2 == eq % 10)
            }
            let lineStyle = 'red'
            switch (index) {
              case 0:
                if (item2.list.length > 0) {
                  lineStyle = {
                    normal: {
                      color: 'target'
                    }
                  }
                } else {
                  lineStyle = {
                    normal: {
                      color: color.c2
                    }
                  }
                }
                break
              default:
                lineStyle = {
                  normal: {
                    color: 'source'
                  }
                }
                break
            }
            let obj = {
              source: item.name,
              target: item2.name,
              name: item2.value,
              lineStyle,
              label: {
                // 展示线节点名字
                normal: {
                  show: true,
                  formatter: function (x) {
                    return x.data.name
                  }
                }
              }
            }
            this.links.push(obj)
            if (item2.list && item.list.length > 0) {
              this.handle3(item.list, index + 1)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
