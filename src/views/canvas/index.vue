<template>
  <div>
    <div style="height:calc(100vh - 50px);">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
        :on-node-expand="onNodeExpand" 
        :on-node-collapse="onNodeCollapse"
      />
    </div>
    <!-- <el-button type="success" class="c-show-code-button"><el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4LayoutCenter.vue" target="_blank" style="color: #ffffff;">查看代码</el-link></el-button> -->
  </div>
</template>

<script>
import SeeksRelationGraph from '@/components/relation-graph/index'
export default {
  name: 'Demo',
  components: { SeeksRelationGraph },
  data() {
    return {
      needShowTier:2,
      g_loading: true,
      demoname: '---',
      isShowCodePanel: false,
      distanceCoefficient: 1,
      graphOptions: {
        debug: true,
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
        allowShowMiniNameFilter:true,
        // allowShowMiniToolBar:true,
        // allowShowMiniNameFilter:true,
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        // moveToCenterWhenResize:true,
        defaultFocusRootNode:'gray',
        isMoveByParentNode:false, //是否在拖动节点后让子节点跟随
        hideNodeContentByZoom:true, //是否根据缩放比例隐藏节点内容
        defaultLineShape: 2,
        defaultNodeWidth:50,
        defaultNodeHeight:50,
        defaultExpandHolderPosition: "right",
        'layouts': [
          {
            label: '中心布局',
            'layoutName': 'center',
            'layoutClassName': 'seeks-layout-center',
            useLayoutStyleOptions: true,
            'defaultNodeWidth': '50',
            'defaultNodeHeight': '50',
            defaultNodeBorderWidth: 0,
            defaultNodeColor: 'rgba(238, 178, 94, 1)',
            defaultLineShape: 1,
            distance_coefficient:.5
          }
        ],
        "defaultLineMarker": {
          "markerWidth": 12,
          "markerHeight": 12,
          "refX": 6,
          "refY": 6,
          "data": "M2,2 L10,6 L2,10 L6,6 L2,2"
        },
        defaultJunctionPoint: 'border', // 这里可以参考"Graph 图谱"中的参数进行设置
        
      }
    }
  },
  mounted() {
    this.setGraphData()
  },
  methods: {
    setGraphData() {
      let _that = this
      // 使用要点：通过节点属性expandHolderPosition: 'right' 和 expanded: false 可以让节点在没有子节点的情况下展示一个"展开"按钮
      //         通过onNodeExpand事件监听节点，在被展开的时候有选择的去从后台获取数据，如果已经从后台加载过数据，则让当前图谱根据当前的节点重新布局
      var __graph_json_data = {
        'rootId': '2', // 根节点
        nodes: [
          { id: '1', 'text': '节点-1', myicon: 'el-icon-star-on', color:'skyblue', nodeShape: 1 },
          { id: '2', 'text': '根节点', myicon: 'el-icon-setting', color:'skyblue', fontColor:'#fff', color:'#000', nodeShape: 0, width:80, height:80, 'innerHTML': '<div class="c-my-node" style="background-image: url(https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2308340537,462224207&fm=58&app=83&f=JPEG?w=250&h=250&s=EC708F46DA96B89CB69D5DDA0300D014);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">侯亮平</div></div>' },
          { id: '3', 'text': '节点-3', myicon: 'el-icon-setting',},
          { id: '4', 'text': '节点-4', myicon: 'el-icon-star-on', color:'skyblue', nodeShape: 1 },
          { id: '6', 'text': '节点-6', myicon: 'el-icon-setting', color:'skyblue', nodeShape: 1 },
          { id: '7', 'text': '节点-7', myicon: 'el-icon-setting', color:'skyblue', nodeShape: 1 },
          { id: '8', 'text': '节点-8', myicon: 'el-icon-star-on', color:'skyblue', nodeShape: 1 },
          { id: '9', 'text': '节点-9', myicon: 'el-icon-headset', color:'skyblue', nodeShape: 1 },
          { id: '71', 'text': '节点-71', myicon: 'el-icon-headset' },
          { id: '72', 'text': '节点-72', myicon: 'el-icon-s-tools' },
          { id: '73', 'text': '节点-73', myicon: 'el-icon-star-on' },
          { id: '81', 'text': '节点-81', myicon: 'el-icon-s-promotion' },
          { id: '82', 'text': '节点-82', myicon: 'el-icon-s-promotion' },
          { id: '83', 'text': '节点-83', myicon: 'el-icon-star-on' },
          { id: '84', 'text': '节点-84', myicon: 'el-icon-s-promotion' },
          { id: '85', 'text': '节点-85', myicon: 'el-icon-sunny' },
          { id: '91', 'text': '节点-91', myicon: 'el-icon-sunny' },
          { id: '92', 'text': '节点-82', myicon: 'el-icon-sunny' },
          { id: '51', 'text': '节点-51', myicon: 'el-icon-sunny' },
          { id: '52', 'text': '节点-52', myicon: 'el-icon-sunny' },
          { id: '53', 'text': '节点-53', myicon: 'el-icon-sunny' },
          { id: '54', 'text': '节点-54', myicon: 'el-icon-sunny' },
          { id: '55', 'text': '节点-55', myicon: 'el-icon-sunny' },
          { id: '5', 'text': '节点-5', myicon: 'el-icon-sunny' },
          { id: '5551', 'text': '测试-5551', myicon: 'el-icon-sunny' },
          { id: '5552', 'text': '测试-5552', myicon: 'el-icon-sunny' },
          { id: '5553', 'text': '测试-5553', myicon: 'el-icon-sunny' },
          { id: '5554', 'text': '测试-5554', myicon: 'el-icon-sunny' },
          { id: '5555', 'text': '测试-5555', myicon: 'el-icon-sunny' },
          { id: '5556', 'text': '测试-5556', myicon: 'el-icon-sunny' },
          { id: '5557', 'text': '测试-5557', myicon: 'el-icon-sunny' },
          { id: '5558', 'text': '测试-5558', myicon: 'el-icon-sunny' },
        ],
        links: [
          { from: '7', to: '71', text: '投资' },
          { from: '7', to: '72', text: '投资' },
          { from: '7', to: '73', text: '投资' },
          { from: '8', to: '81', text: '投资' },
          { from: '8', to: '82', text: '投资' },
          { from: '8', to: '83', text: '投资' },
          { from: '8', to: '84', text: '投资' },
          { from: '8', to: '85', text: '投资' },
          { from: '9', to: '91', text: '投资' },
          { from: '9', to: '92', text: '投资' },
          { from: '5', to: '51', text: '投资1' },
          { from: '5', to: '52', text: '投资' },
          { from: '5', to: '53', text: '投资3' },
          { from: '5', to: '54', text: '投资4' },
          { from: '5', to: '55', text: '投资' },
          { from: '1', to: '2', text: '投资' },
          { from: '3', to: '1', text: '高管' },
          { from: '4', to: '2', text: '高管' },
          { from: '6', to: '2', text: '高管' },
          { from: '7', to: '2', text: '高管' },
          { from: '8', to: '2', text: '高管' },
          { from: '9', to: '2', text: '高管' },
          { from: '1', to: '5', text: '投资' },
          // { from: '5', to: '7', text: ' 5-7' },
          { from: '5', to: '5551', text: '测试5551' },
          { from: '5', to: '5552', text: '测试5552' },
          { from: '5', to: '5553', text: '测试5553' },
          { from: '5', to: '5554', text: '测试5554' },
          { from: '5', to: '5555', text: '测试5555' },
          { from: '5', to: '5556', text: '测试5556' },
          { from: '5', to: '5557', text: '测试5557' },
          { from: '5', to: '5558', text: '测试5558' }
        ]
      }
      // console.log(JSON.stringify(__graph_json_data))
      this.g_loading = false
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
        // 获取根节点的子节点，即可获得图谱第一层中的节点
        var level_1_nodes = seeksRGGraph.getNodeById(__graph_json_data.rootId).lot.childs
        level_1_nodes.forEach(thisLevel1Node => {
          this.applyCollapseStyle2Node(thisLevel1Node,this.needShowTier)
        })
        this.$refs.seeksRelationGraph.refresh()
      })
    },
    onNodeCollapse(node, e) {
      console.log('onNodeCollapse:', node)
      // 当有一些节点被显示或隐藏起来时，会让图谱看着很难看，需要布局器重新为节点分配位置，所以这里需要调用refresh方法来重新布局
      this.$refs.seeksRelationGraph.refresh()
    },
    onNodeExpand(node, e) {
      // 当有一些节点被显示或隐藏起来时，会让图谱看着很难看，需要布局器重新为节点分配位置，所以这里需要调用refresh方法来重新布局
      console.log('onNodeExpand:🐅', this.$refs.seeksRelationGraph)
      this.$refs.seeksRelationGraph.refresh()
      //  if (this.graphSetting.autoLayouting) {
      //       if (!this.graphSetting.layouter.autoLayout) {
      //         console.log('当前布局不支持自动布局！')
      //       } else {
      //         // this.graphSetting.layouter.autoLayout(true)
      //         let flag = 0, allNum = 150;
      //         for(let key = 0; key < allNum; key ++){
      //         this.graphSetting.layouter.autoLayout(true)
      //         flag = key
      //         }
      //         if(flag >= allNum - 1){
      //           this.timer = setTimeout(()=>{
      //             this.disabled = false
      //           },1000)
      //           this.graphSetting.autoLayouting = !this.graphSetting.autoLayouting
      //         }
      //       }
      //     } else {
      //       if (!this.graphSetting.layouter.stop) {
      //         console.log('当前布局不支持自动布局stop！')
      //       } else {
      //         this.graphSetting.layouter.stop()
      //       }
      //     }
    },
    applyCollapseStyle2Node(_node,needShowTier) { // _node的子节点将被隐藏，同时让_node右侧显示一个加号，点击后可以展开子节点
      needShowTier--
      if (_node.lot.childs.length > 0) {
        _node.lot.childs.forEach(thisChildNode => {
          if (needShowTier > 1) { // 判断needShowTier>1 中心点也算一层
            thisChildNode.isShow = true
            _node.expanded = true // 按钮显示-
            this.applyCollapseStyle2Node(thisChildNode, needShowTier)
          } else {
            thisChildNode.isShow = false
            _node.expanded = false // 按钮显示+
          }
        })
        _node.expandHolderPosition = 'left' // + - 按钮的位置
      }
    },
    onNodeClick(nodeObject, $event) {
      console.log('onNodeClick:', nodeObject)
    },
    onLineClick(lineObject, $event) {
      console.log('onLineClick:', lineObject)
    }
  }
}
</script>

<style lang="scss">
.c-my-node{
    background-position: center center;
    background-size: 100%;
    border:#ff8c00 solid 2px;
    height:80px;
    width:80px;
    border-radius: 40px;
}
.c-node-name{
  width:160px;margin-left:-40px;text-align:center;margin-top:85px;
}
</style>
 
