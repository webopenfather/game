function Game(ele) {// element 元素/节点

    // 0.保存地图对象
    this.ele = document.querySelector(ele)

    // 1. 搞地图
    this.map = new Map(this.ele) //将地图标签对象传递给map构造函数，里面设置宽度高度等
    this.map.create() 
}