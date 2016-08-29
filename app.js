"use strict";

let snake = {
    x: 0,
    y: 5,
    speed: 400,
    length: 3,
    directions: {
        right: true,
        left: false,
        top: false,
        bottom: false
    }
};
// сделать тело змейки состоящее из отдельных блоков, которые проще окрашивать
// в теле сделать голову, которая будет взаимодействовать с предметами.

let snakeBody = [];

function constructorSnekeBody () {

}

let field = {
    row: $('[data-y="' + snake.y + '"] div'),
    col: $('.block-' + snake.x)
};
console.log(field.row);

gameLoop();

function gameLoop() {
    setInterval(function () {
        if (snake.directions.right) {
            moving(field.row, snake.x);
            snake.x++;
            if (snake.x > snake.x.length) {
                snake.x = 0;
            }
        } else if (snake.directions.bottom) {
            moving(field.col, snake.y);
            if (snake.y < 10) {
                snake.y++;
            } else {
                snake.y = 1;
            }
        }
        console.log('x:' + snake.x + ', y: ' + snake.y);
    }, snake.speed)
}

function moving(line, i) {
    snakeBody.push(line.eq(i));

    for (var key in snakeBody) {
        snakeBody[key].addClass('gray');
    }

    if (snakeBody.length > snake.length) {
        snakeBody.shift().removeClass('gray');
    }
}

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 40:  //вниз
            directionsFalse();
            snake.directions.bottom = true;
            break;
        case 39:  //вправо
            directionsFalse();
            snake.directions.right = true;
            break;
        case 37: //влево
            directionsFalse();
            snake.directions.left = true;
            break;
        case 38: //вверх
            directionsFalse();
            snake.directions.up = true;
    }
});

function directionsFalse () {
    for (var key in snake.directions) {
        snake.directions[key] = false;
    }
}
