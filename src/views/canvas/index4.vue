<template>
  <div id="graph" ref="graph">
    <ToolBar :fullscreen="fullscreen" @changeFullscreen="changeFullscreen" />
  </div>
</template>
<script>
import * as d3 from 'd3'
import screenfull from 'screenfull'
import { Status } from '@/func/graph/Util/constant'
import Node from '@/func/graph/Node/Node'
import Graph from '@/func/graph/index'
import Thumbnail from '@/func/graph/Thumbnail/index'

import ToolBar from './components/ToolBar'
// 默认数据
const defaultDatas = {
  nodes: [
    {
      id: '001',
      label: '节点一',
      font: {
        // 字体
        color: {
          default: 'red',
          selection: '#ffc70d'
        }
      },
      nodeShape: 0,
      width: 40,
      height: 40,
      r: 21
    },
    {
      id: '002',
      label: '节点二',
      nodeShape: 0,
      width: 50,
      height: 50
    },
    {
      id: '003',
      label: '节点三',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '004',
      label: '节点四',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '005',
      label: '节点五',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '006',
      label: '节点六',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '007',
      label: '节点七',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '008',
      label: '节点八',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '009',
      label: '节点九',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '010',
      label: '节点十',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '100',
      label: '100',
      nodeShape: 0,
      width: 40,
      height: 40
    },
    {
      id: '101',
      label: '101',
      nodeShape: 0,
      width: 40,
      height: 40
    }
  ],
  edges: [
    {
      source: '001',
      target: '002',
      label: '关系一',
      font: {
        // 字体
        color: {
          default: '#ccc',
          selection: '#ffc70d'
        },
        edgeColor: {
          default: 'green',
          selection: '#ffc70d'
        }
      }
    },
    {
      source: '001',
      target: '003',
      label: '关系2'
    },
    {
      source: '001',
      target: '004',
      label: '关系3'
    },
    {
      source: '001',
      target: '005',
      label: '关系4'
    },
    {
      source: '001',
      target: '006',
      label: '关系5'
    },
    {
      source: '001',
      target: '007',
      label: '关系6'
    },
    {
      source: '001',
      target: '008',
      label: '关系7'
    },
    {
      source: '001',
      target: '009',
      label: '关系8'
    },
    {
      source: '001',
      target: '010',
      label: '关系9'
    },
    {
      source: '010',
      target: '100',
      label: '关系100'
    },
    {
      source: '101',
      target: '009',
      label: '关系101'
    }
  ]
}
export default {
  components: {
    ToolBar
  },
  data() {
    return {
      graph: null,
      fullscreen: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeGraph()
      this.initializeEvent()
      this.loadData()
    })
  },
  watch: {
    fullscreen: function (newVal, oldVal) {
      if (newVal === true || oldVal === false) {
        screenfull.toggle()
      } else if (newVal === false || oldVal === true) {
        screenfull.exit()
      }
    }
  },
  methods: {
    // 初始化
    initializeGraph() {
      const option = {
        color: {
          // 节点颜色
          default: {
            border: '#409eff',
            background: '#409eff'
          },
          selection: {
            border: '#ffc70d',
            background: '#ffc70d'
          }
        },
        font: {
          // 字体
          color: {
            default: 'red',
            selection: '#ffc70d'
          },
          size: {
            default: 12,
            hover: 13,
            selection: 13,
            dark: 12,
            f14: 14
          },
          face: 'PingFang SC',
          background: 'none',
          align: 'center',
          bold: {
            mod: 'bold'
          }
        }
      }
      let dom = document.querySelector('#graph')
      const bounding = dom.getBoundingClientRect()
      // 画布
      this.graph = new Graph(
        dom,
        { nodes: [], edges: [] },
        bounding.width,
        bounding.height,
        option
      )
      // 缩略图
      this.graph.thumbnail = new Thumbnail(
        dom,
        this.graph.body,
        this.graph.operator
      )
    },
    // 注册事件
    initializeEvent() {
      const canvas = this.graph.body.nodeContainer
      d3.select(canvas)
        .on('click', () =>
          this.graph.body.emitter.emit(
            'tap',
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // eslint-disable-next-line no-console
              console.log(
                '单击',
                params,
                params && params.x,
                params && params.y
              )
              this.clickEvent(d3.mouse(canvas), d3.event, params)
            }
          )
        )
        .on('mousemove', () =>
          this.graph.body.emitter.emit(
            'tap',
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // 阻止默认右键事件
              d3.event.returnValue = false
              // eslint-disable-next-line no-console
              // console.log('移动', params)
            }
          )
        )
        .on('contextmenu', () =>
          this.graph.body.emitter.emit(
            'tap',
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // 阻止默认右键事件
              d3.event.returnValue = false
              // eslint-disable-next-line no-console
              console.log('右键')
            }
          )
        )
        .on('dblclick', () =>
          this.graph.body.emitter.emit(
            'tap',
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // eslint-disable-next-line no-console
              console.log('双击')
            }
          )
        )
      // 注册窗口resize事件
      d3.select(window).on('resize', () => {
        this.graph.body.emitter.emit(
          'resize',
          document.body.clientWidth,
          document.body.clientHeight
        )
      })
    },
    /** 加载数据 */
    loadData() {
      // 延时
      setTimeout(() => this.graph.setData(defaultDatas))
    },
    /** 点击事件 */
    clickEvent(coordinates, evt, obj) {
      if (obj && obj instanceof Node) {
        const oldStatus = obj.status
        obj.status =
          oldStatus === Status.selection ? Status.default : Status.selection
        this.graph.body.emitter.emit('click.node', event, obj)
      }
    },
    // 全屏状态修改
    changeFullscreen(value) {
      this.fullscreen = value
    }
  }
}
</script>
<style>
html,
body {
  overflow: hidden;
  height: 100%;
  margin: 0;
  padding: 0;
}
#graph {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
