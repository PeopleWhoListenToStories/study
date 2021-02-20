'use strict'
import * as Util from '../Util/index'
class Edge {
  constructor(body, operator, data, globalOptions) {
    this.id = Util.uuid()
    this.body = body
    this.operator = operator
    this.globalOptions = globalOptions // 接收全局变量
    this.source = data.source // 源节点
    this.target = data.target // 目标节点
    this.label = data.label
    this.font = data.font||globalOptions.font
  }
}
export default Edge
