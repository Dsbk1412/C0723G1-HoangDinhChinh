function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 100; //Thêm speed 
    this.direction = 'right'; //hướng di chuyển ban đầu

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"  alt=""/>';
    }

    //Hàm di chuyển sang phải
    this.moveRight = function(){
        this.left += this.speed;
        console.log('Moved right: ' + this.left);
    }

    //Hàm di chuyển sang trái
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('Moved left: ' + this.left);
    }

    //Hàm di chuyển lên trên
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('Moved up: ' + this.top);
    }

    //Hàm di chuyển xuống dưới
    this.moveDown = function(){
        this.top += this.speed;
        console.log('Moved down: ' + this.top);
    }
}

let hero = new Hero('doraemon.png', 20, 30, 200);

function start(){
    if(hero.direction === 'right'){
        if(hero.left < window.innerWidth - hero.size - hero.speed){
            hero.moveRight();
        }else{
            hero.direction = 'down';
        }
    }else if(hero.direction === 'down'){
        if(hero.top < window.innerHeight - hero.size - hero.speed){
            hero.moveDown();
        }else{
            hero.direction = 'left';
        }
    }else if(hero.direction === 'left'){
        if(hero.left > hero.speed){
            hero.moveLeft();
        }else{
            hero.direction = 'up';
        }
    }else if(hero.direction === 'up'){
        if(hero.top > hero.speed){
            hero.moveUp();
        }else{
            hero.direction = 'right';
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
