'use strict'
import Edge from './Edge'

/**
 * 直线
 */
class StraightEdge extends Edge {
  /**
   * 绘制连线
   * @param {Object} body body
   */
  draw(body) {
    // console.log(this,'this')
    const e = this
    const ctx = body.edgeContainer.getContext('2d')
    ctx.save()
    ctx.lineCap = 'round'
    // 绘制连线
    this.operator.straightEdge(ctx, [e.source.x, e.source.y], [e.target.x, e.target.y], true)
    // 处理线条样式
    ctx.lineWidth = 1
    ctx.strokeStyle = '#ddd'
    ctx.stroke()
    if (e.globalOptions.showEdge && e.label !== undefined && e.label !== null) {
      // this.arrow_line1(ctx, [e.source.x, e.source.y],[e.target.x,e.target.y],e)
      this.drawLabel(ctx, e)
    }
    ctx.restore()
  }

  /**
   * 绘制线名称 A(x,y) B(m,n) 则AB中点坐标为( (x+m)/2 , (y+n)/2 )
   * @param {Object} ctx canvas 上下文
   * @param {Object} d 当前节点对象
   */
  drawLabel(ctx, d) { 
      const  width = d.label.length * 10,
      height = 12,
      x1 = d.source.x,
      y1 = d.source.y,
      x2 = d.target.x,
      y2 = d.target.y,
      x = (x1+x2) / 2 - d.label.length * 5 , 
      y = (y1 + y2) / 2 - 6,
      cx = x + 0.5 * width,
      cy = y + 0.5 * height,
      degrees = this.getAngle(d.source.x, d.source.y, d.target.x, d.target.y);
      ctx.fillStyle="#fff"
      // 判断范围 是否需要文字翻转
      if ((degrees - 90) >= 90 && (degrees - 90) <= 270) { 
        ctx.translate(cx, cy); 
        ctx.rotate((degrees + 90) * Math.PI / 180)//加个180度，反过来
        ctx.translate(-cx, -cy);
      } else {
        ctx.translate(cx, cy); 
        ctx.rotate((degrees - 90) * Math.PI / 180)//加个180度，反过来
        ctx.translate(-cx, -cy);
      }
      ctx.fillRect(x,y,width,height);
      ctx.fillStyle = d.font.color.default;
      ctx.font = "10px SimSun, Songti SC";
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle'
      ctx.fillText(d.label, (x1 + x2) / 2, (y1 + y2) / 2 )
      // ctx.beginPath() 
      // ctx.fillStyle="yellow"
      // ctx.fillRect( (x1+x2) / 2 - d.label.length * 5 , (y1 + y2) / 2 - 6, d.label.length * 10, 12 ); //绘制 800*300 像素的已填充矩形：
      // ctx.rotate(this.getAngle(d.source.x, d.source.y, d.target.x, d.target.y));
      // ctx.fillStyle = d.font.color.default;
      // ctx.font = "10px SimSun, Songti SC";
      // ctx.textAlign = "center";
      // ctx.textBaseline = 'middle'
      // ctx.fillText(d.label, (x1 + x2) / 2, (y1 + y2) / 2 )
      // ctx.stroke()
      // ctx.closePath() 
    // ctx.save()
    // ctx.textBaseline = 'middle'
    // ctx.textAlign = 'center'
    // const opt = d.options
    // ctx.fillStyle = opt.font.color.default
    // ctx.font = `${opt.font.size.default}px ${opt.font.face}`
    // let h = d.y
    // // let h = d.y + d.r + 10
    // // let _text = fittingString(ctx, d.label, d.r * 2)
    // ctx.fillText(d.label, d.x, h)
    // ctx.restore()
  }

  arrow_line(ctx, ox, oy, x1, y1, x2, y2) {
    // //参数说明 canvas的 id ，原点坐标  第一个端点的坐标，第二个端点的坐标
    // var start = new Array(x1, y1);
    // var end = new Array(x2, y2);
    // ctx.translate(ox, oy,0);
    // ctx.beginPath()
    // var ang = (end[0] - start[0]) / (end[1] - start[1]);
    // ang = Math.atan(ang);
    // if (end[1] - start[1] >= 0) {
    //   ctx.rotate(-ang);
    // } else {
    //   ctx.rotate(Math.PI - ang);//加个180度，反过来
    // }
    // ctx.lineTo(-5, -10);
    // ctx.lineTo(0, -5);
    // ctx.lineTo(5, -10);
    // ctx.lineTo(0, 0);
    // // ctx.fill()
    // ctx.closePath()
  }

  arrow_line1(ctx,sta,end,e){
    ctx.translate(end[0], end[1]);
    //我的箭头本垂直向下，算出直线偏离Y的角，然后旋转 ,rotate是顺时针旋转的，所以加个负号
    let ang = (end[0] - sta[0]) / (end[1] - sta[1]);
    ang = Math.atan(ang);
    if (end[1] - sta[1] >= 0) {
        ctx.rotate(-ang);
    } else {
        ctx.rotate(Math.PI - ang);//加个180度，反过来
        //ctx.scale(1, 0.2);
    }
    ctx.lineTo(-5, -10);
    ctx.lineTo(0, -5);
    ctx.lineTo(5, -10);
    ctx.lineTo(0, 0);
    ctx.fillStyle = e.target.options.color.default.border;
    ctx.stroke()
    ctx.fill(); //箭头是个封闭图形
    ctx.lineWidth = 3;
    ctx.restore();   //恢复到堆的上一个状态，其实这里没什么用。
    ctx.closePath();
  }

  getAngle(px,py,mx,my){//获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
    var x = Math.abs(px-mx);
    var y = Math.abs(py-my);
    var z = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    var cos = y/z;
    var radina = Math.acos(cos);//用反三角函数求弧度
    var angle = Math.floor(180/(Math.PI/radina));//将弧度转换成角度

    if(mx>px&&my>py){//鼠标在第四象限
        angle = 180 - angle;
    }

    if(mx==px&&my>py){//鼠标在y轴负方向上
        angle = 180;
    }

    if(mx>px&&my==py){//鼠标在x轴正方向上
        angle = 90;
    }

    if(mx<px&&my>py){//鼠标在第三象限
        angle = 180+angle;
    }

    if(mx<px&&my==py){//鼠标在x轴负方向
        angle = 270;
    }

    if(mx<px&&my<py){//鼠标在第二象限
        angle = 360 - angle;
    }
        return angle;
  }

}

export default StraightEdge
