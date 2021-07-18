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

    // 方向
    this.direction = 'right'
}

Snake.prototype.remove = function() {

    // 父.removeChild(子)
    // this.ele.removeChild(子)
    // 子 { x: 3, y :2, color:'red', ele:null} 中的 ele
    // 循环遍历创建蛇
    for (let i = 0; i<this.snakeObj.length; i++) 
    {
        // 单独保存下蛇节对象
        // this.snakeObj[i].ele
        if (this.snakeObj[i].ele)
        {// 开始没有保存蛇节对象
         // 所以增加判断  当保存了 再移除
            this.ele.removeChild(this.snakeObj[i].ele)
        }
    }
}

Snake.prototype.create = function() 
{
    // 从地图上清除蛇
    this.remove()

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
        // 单独保存下蛇节对象
        this.snakeObj[i].ele = divObj
        // 3. 放到页面展示
        this.ele.appendChild(divObj)
    }
}


Snake.prototype.move = function() {

    // 蛇头  蛇身体1   蛇身体2    蛇身体3
    // 蛇头 上    y - 1
    // 蛇头 下    y + 1
    // 蛇头 左    x - 1
    // 蛇头 右    x + 1

    // 动一下：  3用2位置  2用1位置 1用蛇头位置 蛇头下面判断好了
    //           蛇头自己判断， 1用蛇头  2用蛇1  （切记：有问题  1已经改成蛇头了 ）

    // 将构造函数中蛇的x数据+1
    // for (let i = 0; i<this.snakeObj.length; i++)
    // {
    //     this.snakeObj[i].x += 1
    // } 

    // i > 0 不含蛇头 （用这个  因为蛇头单独判断）
    // i >= 0 含蛇头
    for (let i = this.snakeObj.length - 1; i>0; i--) {
        // console.log(this.snakeObj[i])
        this.snakeObj[i].x = this.snakeObj[i-1].x
        this.snakeObj[i].y = this.snakeObj[i-1].y
    }

    switch (this.direction) {
        case 'top':
            this.snakeObj[0].y -= 1
            break;
        case 'bottom':
            this.snakeObj[0].y += 1
            break;
        case 'left':
            this.snakeObj[0].x -= 1
            break;
        case 'right':
            this.snakeObj[0].x += 1
            break;
    }

    // 然后重新创建
    this.create()
}