<template>
  <div id="graph" ref="graph">
    <ToolBar :fullscreen="fullscreen" @changeFullscreen="changeFullscreen" />
  </div>
</template>
<script>
import * as d3 from "d3";
import screenfull from "screenfull";
import { Status } from "@/graph/Util/constant";
import Node from "@/graph/Node/Node";
import Graph from "@/graph/index";
import Thumbnail from "@/graph/Thumbnail/index";

import ToolBar from "./components/ToolBar";
// 默认数据
const defaultDatas = {
  nodes: [
    {
      id: "0",
      label: "节点0",
      nodeShape: 1,
      width:30,
      height:30,
    },
    {
      id: "1",
      label: "节点1",
      nodeShape: 0,
      r: 15,
    },
    {
      id: "2",
      label: "节点2",
      nodeShape: 1,
      width:27,
      height:27,
      // borderColor:'black',
      // borderWidth:1,
      // color:'yellow',
      // textAlign:'center',
      // textColor:'red',
      size:10,
      // selectTextColor:'black',
      // selectBorder:'red',
      // selectBackground:'green',
      // edgeColor:'skyblue',
      // edgeLineWidth:2,
      // selectEdgeColor:'red'
    },
    {
      id: "3",
      label: "节点3",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "4",
      label: "节点4",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "5",
      label: "节点5",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "6",
      label: "节点6",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "7",
      label: "节点7",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "8",
      label: "节点8",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "9",
      label: "节点9",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "10",
      label: "节点10",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "11",
      label: "节点11",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "12",
      label: "节点12",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "13",
      label: "节点13",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "14",
      label: "节点14",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "15",
      label: "节点15",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    {
      id: "16",
      label: "节点16",
      font: { color: { default: "red", selection: "#ffc70d" } },
      nodeShape: 0,
      r: 20,
    },
    // {
    //   id: "17",
    //   label: "节点17",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "18",
    //   label: "节点18",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "19",
    //   label: "节点19",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "20",
    //   label: "节点20",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "21",
    //   label: "节点21",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "22",
    //   label: "节点22",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "23",
    //   label: "节点23",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "24",
    //   label: "节点24",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "25",
    //   label: "节点25",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "26",
    //   label: "节点26",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "27",
    //   label: "节点27",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "28",
    //   label: "节点28",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "29",
    //   label: "节点29",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "30",
    //   label: "节点30",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "31",
    //   label: "节点31",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "32",
    //   label: "节点32",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "33",
    //   label: "节点33",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "34",
    //   label: "节点34",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "35",
    //   label: "节点35",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "36",
    //   label: "节点36",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "37",
    //   label: "节点37",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "38",
    //   label: "节点38",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "39",
    //   label: "节点39",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "40",
    //   label: "节点40",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "41",
    //   label: "节点41",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "42",
    //   label: "节点42",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "43",
    //   label: "节点43",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "44",
    //   label: "节点44",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "45",
    //   label: "节点45",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "46",
    //   label: "节点46",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "47",
    //   label: "节点47",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "48",
    //   label: "节点48",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // },
    // {
    //   id: "49",
    //   label: "节点49",
    //   font: { color: { default: "red", selection: "#ffc70d" } },
    //   nodeShape: 0,
    //   r: 20,
    // }
  ],
  edges: [
    {
      source: "0",
      target: "1",
      label: "关系一",
      edgeLineWidth:0,
      edgeColor:'green',
      edgeTextColor:'pink',
      edgeTextSize:12
    },
    {
      source: "0",
      target: "2",
      label: "关系2",
      edgeTextSize:12
    },
    {
      source: "0",
      target: "3",
      label: "关系2",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "0",
      target: "4",
      label: "关系3",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "0",
      target: "5",
      label: "关系4",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "0",
      target: "6",
      label: "关系5",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "1",
      target: "7",
      label: "关系6",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "1",
      target: "8",
      label: "关系7",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "2",
      target: "9",
      label: "关系9",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "2",
      target: "10",
      label: "关系10",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "3",
      target: "11",
      label: "关系11",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "3",
      target: "12",
      label: "关系12",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "4",
      target: "13",
      label: "关系13",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "4",
      target: "14",
      label: "关系14",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "5",
      target: "15",
      label: "关系15",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    },
    {
      source: "5",
      target: "16",
      label: "关系16",
      font: {
        color: { default: "#ccc", selection: "#ffc70d" },
        edgeColor: { default: "green", selection: "#ffc70d" },
      },
    }
  ],
};
export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      graph: null,
      fullscreen: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeGraph();
      this.initializeEvent();
      this.loadData();
    });
  },
  watch: {
    fullscreen: function(newVal, oldVal) {
      if (newVal === true || oldVal === false) {
        screenfull.toggle();
      } else if (newVal === false || oldVal === true) {
        screenfull.exit();
      }
    },
  },
  methods: {
    // 初始化
    initializeGraph() {
      const option = {
        color: {
          // 节点颜色
          default: {
            border: "#409eff",// 默认节点边框的颜色
            background: "#00A1FF", // 默认节点背景颜色
          },
          selection: {
            border: "#ffc70d",// 默认选中节点边框的颜色
            background: "#ffc70d",// 默认选中节点背景颜色
          },
          edgeColor: {
            default: "#ccc",// 连接节点线的颜色
            selection: "#ffc70d", // 选中连接节点边的颜色
          },
        },
        font: {
          // 字体
          color: {
            default: "white", // 默认节点字体颜色
            selection: "#ffc70d", // 默认节点选中颜色
          },
          size: { // 节点文字大小
            default: 12,
            hover: 13,
            selection: 13,
            dark: 12,
            f14: 14,
          },
          face: "PingFang SC", // 节点文字字体
          background: "none",
          align: "center",// 节点文字垂直对齐方式
          textBaseline:'middle',// 节点文字垂直对齐方式
          bold: {
            mod: "bold",
          },
          edge:{ 
            default:'#ccc',// 连接线的文本内容
            selection:'#ffc70d'// 选中连接线的文本内容
          },
          edgeTextSize:{ // 默认字体大小
            default: 12,
            hover: 13,
            selection: 13,
            dark: 12,
            f14: 14,
          },
          edgeFace: "SimSun, Songti SC", // 连接线的字体样式
          edgeAlign:'center', // 连接线的横向文本样式
          edgeBaseline:'middle', // 连接线的纵向文本样式
          edgeLineWidth:1, // 连接节点线的宽度
        },
        r: 20, // 默认圆的半径
        width:50, // 默认宽度
        height:50, // 默认高度
        borderWidth:1, // 边框宽度
        nodeShape:0, // 默认圆心
        dragged:false // 是否被拖拽
      };
      let dom = document.querySelector("#graph");
      const bounding = dom.getBoundingClientRect();
      // 画布
      this.graph = new Graph(
        dom,
        { nodes: [], edges: [] },
        bounding.width,
        bounding.height,
        option
      );
      // 缩略图
      this.graph.thumbnail = new Thumbnail(
        dom,
        this.graph.body,
        this.graph.operator
      );
    },
    // 注册事件
    initializeEvent() {
      const canvas = this.graph.body.nodeContainer;
      d3.select(canvas)
        .on("click", () =>
          this.graph.body.emitter.emit(
            "tap",
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // eslint-disable-next-line no-console
              console.log(
                "单击",
                params,
                params && params.x,
                params && params.y
              );
              this.clickEvent(d3.mouse(canvas), d3.event, params);
            }
          )
        )
        .on("mousemove", () =>
          this.graph.body.emitter.emit(
            "tap",
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // 阻止默认右键事件
              d3.event.returnValue = false;
              // eslint-disable-next-line no-console
              // console.log('移动', params)
            }
          )
        )
        .on("contextmenu", () =>
          this.graph.body.emitter.emit(
            "tap",
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // 阻止默认右键事件
              d3.event.returnValue = false;
              // eslint-disable-next-line no-console
              console.log("右键");
            }
          )
        )
        .on("dblclick", () =>
          this.graph.body.emitter.emit(
            "tap",
            d3.mouse(canvas),
            d3.event,
            (params) => {
              // eslint-disable-next-line no-console
              console.log("双击");
            }
          )
        );
      // 注册窗口resize事件
      d3.select(window).on("resize", () => {
        this.graph.body.emitter.emit(
          "resize",
          document.body.clientWidth,
          document.body.clientHeight
        );
      });
    },
    /** 加载数据 */
    loadData() {
      // 延时
      setTimeout(() => this.graph.setData(defaultDatas));
    },
    /** 点击事件 */
    clickEvent(coordinates, evt, obj) {
      if (obj && obj instanceof Node) {
        const oldStatus = obj.status;
        obj.status =
          oldStatus === Status.selection ? Status.default : Status.selection;
        this.graph.body.emitter.emit("click.node", event, obj);
      }
    },
    // 全屏状态修改
    changeFullscreen(value) {
      this.fullscreen = value;
    },
  },
};
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
