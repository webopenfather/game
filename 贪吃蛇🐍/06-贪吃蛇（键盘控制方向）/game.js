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