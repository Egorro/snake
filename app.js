"use strict";

let snake = {
    x: 4,
    y: 5,
    speed: 400,
    length: 3,
    right: false,
    left: false,
    top: false,
    bottom: true
};
// сделать тело змейки состоящее из отдельных блоков, которые проще окрашивать
// в теле сделать голову, которая будет взаимодействовать с предметами.

let field = {
    row: $('[data-y="' + snake.y + '"] div'),
    col: $('.block-' + snake.x)
};

gameLoop();

function gameLoop() {
    setInterval(function () {
        if (snake.right) {
            moving(field.row, snake.x);
            snake.x++;
            if (snake.x > 9) {
                snake.x = 0;
            }
        } else if (snake.bottom) {
            moving(field.col, snake.y);
            if (snake.y < 9) {
                snake.y++;
            } else {
                snake.y = 0;
            }
        }
    }, snake.speed)
}

function moving(el, i) {
    el.eq(i).addClass('gray');
    el.eq(i - snake.length).removeClass('gray');
}
//
document.addEventListener('keydown', function (e) {
    console.log(e.keyCode);

    switch (e.keyCode) {
        case 40:  //вниз
            snake.bottom = true;
            snake.right = false;
            break;
        case 39:  //вправо
            snake.right = true;
            snake.bottom = false;
    }
});
