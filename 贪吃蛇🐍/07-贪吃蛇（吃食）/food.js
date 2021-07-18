function Food(ele) {
    // 1.保存地图对象
    this.ele = ele
    // 2.保存食物属性
    this.len = 20
    this.foodObj = null
    this.foodX = 0
    this.foodY = 0
}

Food.prototype.create = function() {
    // 行内元素需要宽度高度边距  display
    // 一个块元素和另一个块元素 同行展示  float或flex
    // 一个块元素和另一个块元素 上面      定位
    // 1-创建div标签对象
    let divObj = document.createElement('div')
    // 2-设置样式（w20/h20/bgreen/position:absolute）
    divObj.style.width = this.len + 'px'
    divObj.style.height = this.len + 'px'
    divObj.style.background = 'green'
    divObj.style.position = 'absolute'

    // 单独保证下食物的对象
    this.foodObj = divObj
    // divObj.style.left = 
    // divObj.style.top =    不要在这里写，单独搞一个move方法 因为后期食物被吃了
    //                       直接搞left和top即可
    // 3-在页面展示
    this.ele.appendChild(divObj)
    // 4-默认移动食物
    this.move()
}

Food.prototype.move = function() {
    // 脚下留心：每次打开页面刷新 食物位置都会不一样
    // console.log(this.ele)
    // console.log(this.ele.style.width)
    // console.log(this.ele.clientWidth)

    let foodXMaxNum = this.ele.clientWidth / this.len - 1// 40-1
    let foodYMaxNum = this.ele.clientHeight / this.len - 1// 20-1
    // 0  ~ 40    0*20=0  3*20
    // 0  ~ 20 
    // 随机公式： Math.floor(随机数 * (最大-最小+1)+min) 
    // 0.01 * 41 + 0 = 0.4 = 0
    // 0.99 * 41 + 0 = 40.59 = 40    
    // 脚下留心：不能超过40和20   40*20=800 left 设置成800 就超出了
    //     坐标 = 随机个数  *  每个宽度
    this.foodX = Math.floor(Math.random() * (foodXMaxNum-0+1)+0) * this.len
    this.foodY = Math.floor(Math.random() * (foodYMaxNum-0+1)+0) * this.len

    console.log(this.foodX)
    console.log(this.foodY)
    this.foodObj.style.left = this.foodX + 'px'
    this.foodObj.style.top = this.foodY + 'px'
}