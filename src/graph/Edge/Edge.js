'use strict'
import * as Util from '../Util/index'
class Edge {
  constructor(body, operator, data,globalOptions) {
    this.id = Util.uuid()
    this.body = body
    this.operator = operator
    this.globalOptions = globalOptions // 接收全局变量
    this.source = data.source // 源节点
    this.target = data.target // 目标节点
    this.label = data.label
    this.edgeLineWidth = data.edgeLineWidth  || globalOptions.font.edgeLineWidth  // 连接节点线的宽度
    this.edgeColor = data.edgeColor || globalOptions.color.edgeColor.default // 连接节点线的颜色
    this.edgeTextColor = data.edgeTextColor || globalOptions.font.edge.default // 连接线的文本内容
    this.selectEdgeColor = data.selectEdgeColor || globalOptions.color.edgeColor.selection // 选中连接节点边的颜色
    this.edgeTextSize = data.edgeTextSize || globalOptions.font.edgeTextSize.default; //  连接线的文本大小
    this.edgeFace = data.edgeFace || globalOptions.font.edgeFace // 文字的类型
    this.edgeAlign =  data.edgeAlign || globalOptions.font.edgeAlign // 文本居中样式
    this.edgeBaseline =data.edgeBaseline || globalOptions.font.edgeBaseline // 文本垂直样式
    this.showEdge = data.showEdge || globalOptions.showEdge
    this.font = data.font||globalOptions.font
  }

   /**
   * 填充样式
   * @param {Object} ctx canvas上下文
   */
  fillEdgeStyle(ctx) {
    const d = this;
    console.log(d,"d")
    // switch (d.status) {
    //   case Status.selection:
    //     ctx.fillStyle = d.selectBackground;
    //     ctx.strokeStyle = d.selectBorder;
    //     break;
    //   default:
    //     ctx.fillStyle = d.color;
    //     ctx.strokeStyle = d.borderColor;
    //     break;
    // }
    ctx.fillStyle = d.color;
    ctx.strokeStyle = d.borderColor;
    ctx.stroke();
    ctx.fill();
  }
}
export default Edge
