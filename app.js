// План
// Написать полностью рабочую версию с изменением направления движения по нажатию стрелок
// Переписать согласно новому ECMAScript 6 с классами и т.д.
// Добавлять новые функции: появление еды на поле, съев которую скорость игры возрастает или увеличивается длина тела
//                          границы поля с телепортацией на противоположную сторону или смерть
//                          смерть от попытки съесть свой хвост
//                          табло показывающеее счет, скорость, длинну тела, кнопка меню
//                          таблица рекордов.

let snake = {
    x: 1,
    y: 5,
    speed: 600,
    length: 3,
    directions: {
        right: false,
        left: false,
        top: false,
        bottom: true
    }
};
// сделать тело змейки состоящее из отдельных блоков, которые проще окрашивать
// в теле сделать голову, которая будет взаимодействовать с предметами.

var snakeBody = [];

var row = $('[data-y="' + snake.y + '"] div');
var col = $('.block-' + snake.x);

// console.log(col);

gameLoop(snake.x, snake.y);

function gameLoop(x, y) {
    setInterval(function () {
        console.log('x:' + x + ', y: ' + y);

        if (snake.directions.right) {
            moving(row, x);
            x++;
            if (x > row.length) {
                x = 0;
            }
        } else if (snake.directions.bottom) {
            moving(col, y);
            y++;
            if (y > row.length) {
                y = 0;
            }
        } else if (snake.directions.left) {
            moving(row, x);
            x--;
            if (x = 0) {
                x = 9;
            }
        } else if (snake.directions.up) {
            moving(col, y);
            y--;
            if (y = 0) {
                y = 9;
            }
        }
        row = $('[data-y="' + y + '"] div');
        col = $('.block-' + x);
    }, snake.speed)
}

function moving(line, i) {
    // console.log(line, i);
    snakeBody.push(line.eq(i));
    // console.log(snakeBody);

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
