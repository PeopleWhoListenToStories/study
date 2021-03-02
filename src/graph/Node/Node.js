"use strict";
import * as Util from "../Util/index";
import defaultNodeOption from "../Options/node";
import { Status } from "../Util/constant";

/**
 * 节点基类
 */

// color: { // 节点颜色
//   default: {
//     border: '#409eff',
//     background: '#409eff'
//   },
//   selection: {
//     border: '#ffc70d',
//     background: '#ffc70d'
//   }
// },
// font: { // 字体
//   color: {
//     default: '#444',
//     selection: '#ffc70d'
//   },
//   size: {
//     default: 12,
//     hover: 13,
//     selection: 13,
//     dark: 12,
//     f14: 14
//   },
//   face: 'PingFang SC',
//   background: 'none',
//   align: 'center',
//   bold: {
//     mod: 'bold'
//   }
// }
class Node {
  constructor(body, data, globalOptions, options) {
    this.options = this.setOptions(globalOptions,options);
    this.id = data.id;
    this.body = body;
    this.globalOptions = globalOptions; // 接收全局变量
    this.label = data.label; // 节点名称
    this.type = data.type; // 节点类型
    this.children = [];
    this.nodeShape = data.nodeShape || this.options.nodeShape; // 节点类型
    this.r = data.r ? data.r : data.width ? data.width / 2 : this.options.r  // 圆的半径
    this.width = data.width || this.options.width ; // 节点宽度
    this.height = data.height || this.options.height; // 节点高度
    this.borderWidth = data.borderWidth || this.options.borderWidth; // 边框的宽度
    this.borderColor = data.borderColor ||  this.options.color.default.border; // 边框的颜色
    this.color = data.color || this.options.color.default.background; // 节点背景颜色
    this.textAlign = data.textAlign || this.options.font.align; // 节点文本样式
    this.textColor = data.textColor || this.options.font.color.default; // 节点文本颜色
    this.textBaseline = data.textBaseline || this.options.font.textBaseline; // 文字垂直对齐方式
    this.size = data.size || this.options.font.size; // 字体大小
    this.face = data.face || this.options.font.face; // 字体类型
    this.selectBorder = data.selectBorder || this.options.color.selection.border; // 选中节点边框样式
    this.selectBackground = data.selectBackground || this.options.color.selection.background; // 选中节点背景样式
    this.selectTextColor = data.selectTextColor || this.options.font.color.selection; // 选中节点文字样式
    this.x = data.x || void 0; // 坐标X
    this.y = data.y || void 0; // 坐标Y
    this.vx = data.vx || void 0; // X方向加速度
    this.vy = data.vy || void 0; // Y方向加速度
    this.fx = data.fx || void 0; // 固定X
    this.fy = data.fy || void 0; // 固定Y
    this.dragged = data.dragged || this.options.dragged; // 是否被拖拽
    this.dr_x = void 0; // 拖拽点击的点位x与圆点x的差
    this.dr_y = void 0; // 拖拽点击的点位y与圆点x的差
    this.boundingBox = data.boundingBox || {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
    }; // 节点的边界
    this.status = data.status || Status.default; // 默认效果
  }

  /**
   * 设置参数
   * @param {Object} defaultOption
   * @param {Object} options
   */
  setOptions(defaultOption,options) {
    return  Util.deepExtend(defaultOption, options);
  }

  /**
   * 半径
   */
  iconRadius() {
    const d = this;
    return d.r;
  }

  static iconRadius() {
    return 20;
  }

  /**
   * 填充样式
   * @param {Object} ctx canvas上下文
   */
  fillNodeStyle(ctx) {
    const d = this;
    switch (d.status) {
      case Status.selection:
        ctx.fillStyle = d.selectBackground;
        ctx.strokeStyle = d.selectBorder;
        break;
      default:
        ctx.fillStyle = d.color;
        ctx.strokeStyle = d.borderColor;
        break;
    }
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 初始化边界框
   */
  initialBBox() {
    const d = this;
    d.boundingBox.left = d.x - d.r;
    d.boundingBox.right = d.x + d.r;
    d.boundingBox.top = d.y - d.r;
    d.boundingBox.bottom = d.y + d.r;
  }
}

export default Node;
