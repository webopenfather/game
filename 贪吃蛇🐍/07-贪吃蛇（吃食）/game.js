function Game(ele) {// element 元素/节点

    // 0.保存地图对象
    this.ele = document.querySelector(ele)

    // 1. 搞地图
    this.map = new Map(this.ele) //将地图标签对象传递给map构造函数，里面设置宽度高度等
    this.map.create() 

    // 2. 搞食物
    this.food = new Food(this.ele) // 将地图传给视图构造函数，后期追加食物
    this.food.create() 

    // 3. 搞蛇
    this.snake = new Snake(this.ele) 
    this.snake.create() 
}

Game.prototype.start = function(){
    setInterval(()=>{
        // 蛇动
        this.snake.move()
        
        // 判断吃食
        let snakeX = this.snake.snakeObj[0].x * 20
        let snakeY = this.snake.snakeObj[0].y * 20
        let foodX = this.food.foodX
        let foodY = this.food.foodY
        
        if (snakeX == foodX && snakeY == foodY) {
            // alert('真香')

            let last = this.snake.snakeObj[this.snake.snakeObj.length - 1]

            this.snake.snakeObj.push({
                x: last.x, 
                y : last.y, 
                color: last.color, 
                ele:null
            })
            this.snake.create() //重新绘制蛇
            // 食物动
            this.food.move()
        }
    }, 150)

    // 监控键盘上下左右键  来动态更改蛇的direction
    document.addEventListener('keydown', (e) => {
        // 获取事件对象
        e = e || window.event
        // 获取键盘
        console.log(e.keyCode) // 38 40 37 39

        switch (e.keyCode) {
            case 38:
                this.snake.direction = 'top'
                break;
            case 40:
                this.snake.direction = 'bottom'
                break;
            case 37:
                if (this.snake.direction == 'right') {
                    alert('游戏结束')
                }
                this.snake.direction = 'left'
                break;
            case 39:
                this.snake.direction = 'right'
                break;
            default:
                break;
        }
    })
}