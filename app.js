// План
// Написать полностью рабочую версию с изменением направления движения по нажатию стрелок.
// Запретить изменять направление движения на противоположное или смерть.
// Переписать согласно новому ECMAScript 6 с классами и т.д.
// Добавлять новые функции: появление еды на поле, съев которую скорость игры возрастает или увеличивается длина тела;
//                          границы поля с телепортацией на противоположную сторону или смерть;
//                          смерть от попытки съесть свой хвост;
//                          табло показывающеее счет, скорость, длинну тела, кнопка меню;
//                          таблица рекордов.

var snake = {
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

gameLoop(snake.x, snake.y);

function gameLoop(x, y) {
    setInterval(function () {
        console.log('x:' + x + ', y: ' + y);

        if (snake.directions.right) {
            x++;
            if (x > row.length - 1) {
                x = 0;
            }
            moving(row, x);
        } else if (snake.directions.bottom) {
            y++;
            if (y > row.length - 1) {
                y = 0;
            }
            moving(col, y);
        } else if (snake.directions.left) {
            x--;
            if (x < 0) {
                x = 9;
            }
            moving(row, x);
        } else if (snake.directions.up) {
            y--;
            if (y < 0) {
                y = 9;
            }
            moving(col, y);
        }

        row = $('[data-y="' + y + '"] div');
        col = $('.block-' + x);
    }, snake.speed)
}

function moving(line, i) {
    snakeBody.push(line.eq(i));
    // голова
    snakeBody[snakeBody.length - 1].addClass('green');
    snakeBody[snakeBody.length - 2].removeClass('green');

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
