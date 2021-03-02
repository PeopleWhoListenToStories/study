<template>
  <div  class="c-mini-toolbar">
    <div class="c-mb-button" style="margin-top: 0px;" @click="changeFullscreen(!fullscreen)">
      <svg class="rg-icon" aria-hidden="true"><use xlink:href="#icon-resize-">
        <svg id="icon-resize-" viewBox="0 0 1024 1024"><path d="M410.816 673.514667L230.997333 853.333333H384v85.333334H85.333333V640h85.333334v153.002667l179.818666-179.84 60.330667 60.373333z m-53.632-256L170.666667 230.997333V384H85.333333V85.333333h298.666667v85.333334h-153.002667l186.517334 186.517333-60.330667 60.330667z m234.666667-45.696L793.002667 170.666667H640V85.333333h298.666667v298.666667h-85.333334v-153.002667l-201.152 201.173334-60.330666-60.373334z m67.029333 226.709333L853.333333 793.002667V640h85.333334v298.666667H640v-85.333334h153.002667l-194.474667-194.453333 60.352-60.352z"></path></svg>
        </use></svg>
      <span class="c-mb-text">{{ fullscreen?'退出':'全屏' }}</span>
    </div>
    <!-- <div class="c-mb-button">
      <svg class="rg-icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg>
      <span class="c-mb-text">下载</span>
      <div :style="{width:downloadPanelWidth+'px','margin-left':(downloadPanelWidth*-1)+'px'}" class="c-mb-child-panel">
        <div class="c-mb-button c-mb-button-c" style="width: 50px;" @click="$parent.downloadAsImage('png')">
          <svg class="rg-icon" aria-hidden="true"><use xlink:href="#icon-tupian"></use></svg>
          <span class="c-mb-text">PNG</span>
        </div>
        <div class="c-mb-button c-mb-button-c" style="width: 50px;" @click="$parent.downloadAsImage('jpg')">
          <svg class="rg-icon" aria-hidden="true"><use xlink:href="#icon-tupian"></use></svg>
          <span class="c-mb-text">JPG</span>
        </div>
        <div v-if="typeof $parent.onDownloadExcel === 'function'" class="c-mb-button c-mb-button-c" style="width: 50px;" @click="$parent.onDownloadExcel()">
          <svg class="rg-icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg>
          <span class="c-mb-text">Excel</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props:{
    fullscreen:{
      type:Boolean,
      type:false
    }
  },
  data(){
    return{
      downloadPanelWidth: 106
    }
  },
  mounted(){
    window.onresize = () => { // 监听浏览器的变化 判断是否按下esc键
      if (!this.checkFull()) {
        // 退出全屏后要执行的动作
        this.changeFullscreen(false)
      }
    }
  },
  methods: {
    checkFull() {
      // 判断浏览器是否处于全屏状态 （需要考虑兼容问题）
      // 火狐浏览器
      var isFull =
        document.mozFullScreen ||
        document.fullScreen ||
        // 谷歌浏览器及Webkit内核浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled
      if (isFull === undefined) {
        isFull = false
      }
      return isFull
    },
    changeFullscreen(value){
      this.$emit('changeFullscreen',value)
    }
  },
}
</script>


<style scoped>
  .el-button {
    display: flex;
    justify-content: center;
  }
  .rg-icon {
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    fill: currentColor;
    overflow: hidden;
  }
  .c-mini-toolbar{
    width:44px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    border: #bbbbbb solid 1px;
    background-color: #ffffff;
    box-shadow: 0px 0px 8px #cccccc;
    box-sizing:border-box;
  }
  .c-fixedLayout{
    position: fixed;
    top:100px;
  }
  .c-mb-button{
    height:44px;
    width:42px;
    margin-top:0px;
    background-color: #ffffff;
    border-top: #efefef solid 1px;
    opacity: 1;
    text-align: center;
    padding-top:3px;
    cursor: pointer;
    color: #999999;
    font-size: 18px;
    float: left;
    box-sizing:border-box;
    line-height: 21px;
    position: relative;
  }
  .c-mb-button .c-mb-text{
    display: inline-block;
    height:14px;
    width:42px;
    font-size: 12px;
    line-height: 12px;
    margin-top:24px;
    margin-left:-28px;
    position: absolute;
    color: #262626;
  }
  .c-mb-button-on{
    background-color: #2E74B5;
    border-top: #2E4E8F solid 1px;
    color: #ffffff;
  }
  .c-mb-button:hover{
    background-color: #2E4E8F;
    border-top: #2E4E8F solid 1px;
    color: #ffffff;
  }
  .c-mb-button:hover .c-mb-text,.c-mb-button-on .c-mb-text{
    color: #ffffff;
  }
  .c-mb-button .c-mb-child-panel{
    height:46px;position: absolute;margin-top: -26px;background-color: #ffffff;
    display: none;
    border: #bbbbbb solid 1px;
    box-shadow: 0px 0px 8px #cccccc;
    box-sizing:border-box;
  }
  .c-mb-button:hover .c-mb-child-panel{
    display: block;
  }
  .c-mb-button .c-mb-button{
    height:44px;
    width: 42px;
    margin:0px;
    border: none;
  }
  .c-mb-button-c .c-mb-text{
    color: #262626 !important;
  }
  .c-mb-button-c:hover .c-mb-text,.c-mb-button-on .c-mb-text{
    color: #ffffff !important;
  }
  .c-loading-icon{
    animation:turn 1s linear infinite;
  }
  @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
</style>
