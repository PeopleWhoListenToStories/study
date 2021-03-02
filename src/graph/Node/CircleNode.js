"use strict";
import Node from "./Node";
import { hideLabelScale } from "../Util/constant";
import { fittingString } from "../Util/index";
/**
 * 图标节点类型
 */
class CircleNode extends Node {
  constructor(body, data, globalOptions, options) {
    super(body, data, globalOptions, options);
  }

  /**
   * 绘制节点
   * @param {Object} d 节点对象
   */
  draw() {
    const d = this;
    const body = this.body;
    const ctx = body.nodeContainer.getContext("2d");
    const scale = body.scale;
    const isHideLabel = body.hideLabel;
    // 去除浮点小数保证坐标为整数, 防止抗锯齿性能低下
    d.x = Math.floor(d.x);
    d.y = Math.floor(d.y);
    ctx.save();
    // 节点图标
    this.drawIcon(ctx, false);
    // 节点名称
    if ( d.globalOptions.showLabel &&  d.label !== undefined && d.label !== null &&  !isHideLabel &&  scale.k >= hideLabelScale  ) {
      this.drawLabel(ctx, d);
    }
    ctx.restore();
  }

  /**
   * 绘制缩略图中的节点
   */
  drawThumbnail(ctx) {
    const d = this;
    // 去除浮点小数保证坐标为整数, 防止抗锯齿性能低下
    d.x = Math.floor(d.x);
    d.y = Math.floor(d.y);
    ctx.save();
    // 节点图标
    this.drawIcon(ctx, true);
    ctx.restore();
  }

  /**
   * 绘制节点名称
   * @param {Object} ctx canvas 上下文
   * @param {Object} d 当前节点对象
   */
  drawLabel(ctx, d) { 
    ctx.save();
    ctx.textBaseline = d.textBaseline;
    ctx.textAlign = d.textAlign;
    ctx.fillStyle = d.textColor; 
    ctx.font = `${d.size}px ${d.face}`;
    let _text = fittingString(ctx, d.label, d.r * 2);
    if(d.nodeShape === 0){
      ctx.fillText(_text, d.x , d.y);
    }else{
      ctx.fillText(_text,d.x , d.y )
    }
    ctx.restore();
  }

  /**
   * 绘制图标
   * @param {Object} ctx canvas上下文
   */
  drawIcon(ctx) {
    const d = this;
    ctx.save();
    // 开始绘制
    ctx.beginPath();
    ctx.moveTo(d.x + d.r, d.y);
    this.fillNodeStyle(ctx);
    if (d.nodeShape === 0) {
      ctx.lineWidth = d.borderWidth;
      ctx.arc(d.x, d.y, d.r , 0, 2 * Math.PI);
      ctx.stroke();
    } else if (d.nodeShape === 1){
      ctx.lineJoin = "round";
      ctx.lineWidth = d.borderWidth;
      let r = d.width / 2;
      ctx.strokeRect(d.x - r, d.y - r, d.width, d.height);
      ctx.fillRect(d.x - r, d.y - r, d.width, d.height);
    }
    ctx.fill();
    ctx.restore();
  }

}

export default CircleNode;
