function Map(ele) {
    // 1.保存下地图对象
    this.ele = ele
    // 2. 记录地图相关属性
    this.width = 800
    this.height = 400
}

Map.prototype.create = function() {
    // 设置div宽度高度背景边框
    // this 代表 map构造函数的实例
    // 思考：this能不能使用map构造函数中的属性
    this.ele.style.width = this.width + 'px'
    this.ele.style.height = this.height+ 'px'
    this.ele.style.background = 'url(./bg.png)'
    this.ele.style.border = '10px solid green'
    this.ele.style.position = 'relative'
}