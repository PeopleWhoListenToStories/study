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
    // console.log('画线',this)
    const e = this
    const ctx = body.edgeContainer.getContext('2d')
    ctx.save()
    // this.fillEdgeStyle(ctx);
    ctx.lineCap = 'round'
    // 绘制连线
    this.operator.straightEdge(ctx, [e.source.x, e.source.y], [e.target.x, e.target.y], true)
    // 处理线条样式
    ctx.lineWidth = e.edgeLineWidth
    ctx.strokeStyle = e.edgeColor
    ctx.stroke()
    if (e.showEdge && e.label !== undefined && e.label !== null) {
      // this.arrow_line1(ctx, [e.source.x, e.source.y],[e.target.x,e.target.y],e)
      this.drawArrow(ctx, e)
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
    const width = this.formaterTextLength(d.label,d.edgeTextSize),
    height = 12,
    x1 = d.source.x,
    y1 = d.source.y,
    x2 = d.target.x,
    y2 = d.target.y,
    x = (x1 + x2) / 2 - width / 2,
    y = (y1 + y2) / 2 - 6,
    cx = x + 0.5 * width,
    cy = y + 0.5 * height,
    degrees = this.getAngle(d.source.x, d.source.y, d.target.x, d.target.y);
    ctx.fillStyle = "#fff"
    // 判断范围 是否需要文字翻转
    if ((degrees - 90) >= 90 && (degrees - 90) <= 270) {
      ctx.beginPath()
      ctx.translate(cx, cy);
      ctx.rotate((degrees + 90) * Math.PI / 180)//加个180度，反过来
      ctx.translate(-cx, -cy);
     
    }else {
      ctx.translate(cx, cy);
      ctx.rotate((degrees - 90) * Math.PI / 180)//加个180度，反过来
      ctx.translate(-cx, -cy);
    }
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = d.edgeTextColor;
    ctx.font =`${d.edgeTextSize}px ${d.edgeFace}`;
    ctx.textAlign = d.edgeAlign;
    ctx.textBaseline = d.edgeBaseline
    ctx.fillText(d.label, (x1 + x2) / 2, (y1 + y2) / 2)
    ctx.closePath()
  }

  formaterTextLength(label,size){
    let str = label.split('');
    let len = 0;
    str.forEach(v=>{
      if(this.isChinese(v)){
        len += (11 * size / 10)
      }else{
        len += (6 * size / 10)
      }
    })
    return len
  }

  isChinese(temp){
    var re=/[^\u4E00-\u9FA5]/;
    if (re.test(temp)) return false ;
    return true ;
}

  // 绘画箭头
  drawArrow(ctx, e) {
    const x1 = e.source.x, y1 = e.source.y, x2 = e.target.x, y2 = e.target.y, m = e.target.x, n = e.target.y, r = e.target.r
    let arr = this.getInsertPointBetweenCircleAndLine(x1, y1, x2, y2, m, n, r )
    let degrees = this.getAngle(e.source.x, e.source.y, e.target.x, e.target.y);
    //参数说明 canvas的 id ，原点坐标  第一个端点的坐标，第二个端点的坐标
    var start = new Array(x1, y1);
    var end = new Array(x2, y2);
    var ang = (end[0] - start[0]) / (end[1] - start[1]);
    ang = Math.atan(ang);
    // 判断箭头是否在距离圆心的方向 数组有两项 0 和 1
    if (arr.length) {
      if (degrees >= 0 && degrees < 180) {
        ctx.beginPath()
        ctx.translate(arr[1].x, arr[1].y);
        this.arrow_line(ctx,e,start,end,ang)
        ctx.translate(-arr[1].x, -arr[1].y);
        ctx.closePath()
      } else {
        ctx.beginPath()
        ctx.translate(arr[0].x, arr[0].y);
        this.arrow_line(ctx,e,start,end,ang)
        ctx.translate(-arr[0].x, -arr[0].y);
        ctx.closePath()
      }
    }
  }

  arrow_line (ctx,e,start,end,ang) {
     // 判断箭头的正反方向
     if (end[1] - start[1] >= 0) {
      ctx.beginPath()
      ctx.rotate(-ang);
      ctx.fillStyle = '#ccc' ; // e.target.options.color.default.border
      ctx.lineTo(0, -5);
      ctx.lineTo(5, -10);
      ctx.lineTo(0, 0);
      ctx.lineTo(-5, -10);
      ctx.lineTo(0, -5);
      ctx.stroke()
      // ctx.fill(); //箭头是个封闭图形
      ctx.rotate(ang);
      ctx.closePath()
    } else {
      ctx.beginPath()
      ctx.rotate(Math.PI - ang);//加个180度，反过来
      ctx.fillStyle = '#ccc' ; // e.target.options.color.default.border
      ctx.lineTo(0, -5);
      ctx.lineTo(5, -10);
      ctx.lineTo(0, 0);
      ctx.lineTo(-5, -10);
      ctx.lineTo(0, -5);
      ctx.stroke()
      // ctx.fill(); //箭头是个封闭图形
      ctx.rotate(Math.PI + ang);//加个180度，反过来
      ctx.closePath()
    }
    
  }

  //获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角 
  getAngle(px, py, mx, my) {
    var x = Math.abs(px - mx);
    var y = Math.abs(py - my);
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    var cos = y / z;
    var radina = Math.acos(cos);//用反三角函数求弧度
    var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度

    if (mx > px && my > py) {//鼠标在第四象限
      angle = 180 - angle;
    }

    if (mx == px && my > py) {//鼠标在y轴负方向上
      angle = 180;
    }

    if (mx > px && my == py) {//鼠标在x轴正方向上
      angle = 90;
    }

    if (mx < px && my > py) {//鼠标在第三象限
      angle = 180 + angle;
    }

    if (mx < px && my == py) {//鼠标在x轴负方向
      angle = 270;
    }

    if (mx < px && my < py) {//鼠标在第二象限
      angle = 360 - angle;
    }
    return angle;
  }

  /**
   * 求圆和直线之间的交点
   * 直线方程：y = kx + b
   * 圆的方程：(x - m)² + (x - n)² = r²
   * x1, y1 = 线坐标1, x2, y2 = 线坐标2, m, n = 圆坐标, r = 半径
   */
  getInsertPointBetweenCircleAndLine(x1, y1, x2, y2, m, n, r) {
    // console.log(x1, y1, x2, y2, m, n, r)
    let kbArr = this.binaryEquationGetKB(x1, y1, x2, y2)
    let k = kbArr[0]
    let b = kbArr[1]

    let aX = 1 + k * k
    let bX = 2 * k * (b - n) - 2 * m
    let cX = m * m + (b - n) * (b - n) - r * r

    let insertPoints = []
    let xArr = this.quadEquationGetX(aX, bX, cX)
    xArr.forEach(x => {
      let y = k * x + b
      insertPoints.push({ x: x, y: y })
    })
    return insertPoints
  }

  /**
   * 求二元一次方程的系数
   * y1 = k * x1 + b => k = (y1 - b) / x1
   * y2 = k * x2 + b => y2 = ((y1 - b) / x1) * x2 + b
   */
  binaryEquationGetKB(x1, y1, x2, y2) {
    let k = (y1 - y2) / (x1 - x2)
    let b = (x1 * y2 - x2 * y1) / (x1 - x2)
    return [k, b]
  }

  /**
   * 一元二次方程求根
   * ax² + bx + c = 0
   */
  quadEquationGetX(a, b, c) {
    let xArr = []
    let result = Math.pow(b, 2) - 4 * a * c
    if (result > 0) {
      xArr.push((-b + Math.sqrt(result)) / (2 * a))
      xArr.push((-b - Math.sqrt(result)) / (2 * a))
    } else if (result == 0) {
      xArr.push(-b / (2 * a))
    }
    return xArr
  }



}

export default StraightEdge
