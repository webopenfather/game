function Snake(ele) {
    // 保存地图对象
    this.ele = ele
    // 蛇节长度
    this.len = 20
    // 存蛇
    this.snakeObj = [
      { x: 3, y :2, color:'red', ele:null},  //蛇头
      { x: 2, y :2, color:'blue', ele:null}, // 蛇的身体
      { x: 1, y :2, color:'blue', ele:null}  // 蛇的身体
    ]
}

Snake.prototype.create = function() {
    // 循环遍历创建蛇
    for (let i = 0; i<this.snakeObj.length; i++) 
    {
        // i 0 1 2 
        // this.snakeObj[i]  每节蛇的信息

        // 1. 创建蛇标签对象
        let divObj = document.createElement('div')
        // 2. 设置宽度高度 坐标 颜色
        divObj.style.width = this.len + 'px'
        divObj.style.height = this.len + 'px'
        divObj.style.position = 'absolute'
        divObj.style.left =  this.snakeObj[i].x*this.len+'px'
        divObj.style.top =  this.snakeObj[i].y *this.len+'px'
        divObj.style.background = this.snakeObj[i].color
        // 3. 放到页面展示
        this.ele.appendChild(divObj)
    }
}