// План

// Запретить изменять направление движения на противоположное или смерть.
// Добавить стрелочные функции, там где они нужны.
// Добавлять новые функции: появление еды на поле, съев которую скорость игры возрастает или увеличивается длина тела;
//                          границы поля с телепортацией на противоположную сторону или смерть;
//                          смерть от попытки съесть свой хвост;
//                          табло показывающеее счет, скорость, длинну тела, кнопка меню;
//                          таблица рекордов.
// в теле сделать голову, которая будет взаимодействовать с предметами.
"use strict";

class Snake {
    constructor(options) {
        this._el = options.element;
        this._snake = {
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
        this._snakeBody = [];
        this._row =  $('[data-y="' + this._snake.y + '"] div');
        this._col = $('.block-' + this._snake.x);
        document.addEventListener('keydown', function (e) {
            this._directionsFalse();
            switch (e.keyCode) {
                case 40:  //вниз
                    this._snake.directions.bottom = true;
                    break;
                case 39:  //вправо
                    this._snake.directions.right = true;
                    break;
                case 37: //влево
                    this._snake.directions.left = true;
                    break;
                case 38: //вверх
                    this._snake.directions.up = true;
            }
        }.bind(this));
    }

    gameLoop(x = this._snake.x, y = this._snake.y) {
        setInterval(function () {
            if (this._snake.directions.right) {
                x++;
                if (x > this._row.length - 1) {
                    x = 0;
                }
                this._moving(this._row, x);
            } else if (this._snake.directions.bottom) {
                y++;
                if (y > this._row.length - 1) {
                    y = 0;
                }
                this._moving(this._col, y);
            } else if (this._snake.directions.left) {
                x--;
                if (x < 0) {
                    x = 9;
                }
                this._moving(this._row, x);
            } else if (this._snake.directions.up) {
                y--;
                if (y < 0) {
                    y = 9;
                }
                this._moving(this._col, y);
            }

            this._row = $('[data-y="' + y + '"] div');
            this._col = $('.block-' + x);
            this._foodGenerator();
        }.bind(this), this._snake.speed)
    }

    _moving(line, i) {
        this._snakeBody.push(line.eq(i));

        if (this._snakeBody[this._snakeBody.length - 1][0].classList.contains('eat')) {
            this._snakeBody[this._snakeBody.length - 1][0].classList.remove('eat');
            this._snake.length += 1;
        }

        for (var key in this._snakeBody) {
            this._snakeBody[key].addClass('gray');
        }

        if (this._snakeBody.length > this._snake.length) {
            this._snakeBody.shift().removeClass('gray');
        }
    }

    _directionsFalse() { // посмотреть что такое static
        for (var key in this._snake.directions) {
            this._snake.directions[key] = false;
        }
    }

    _foodGenerator() {
        var blocks = $('.block:not(.gray)');
        var eat = $(blocks[Math.floor(Math.random()*blocks.length + 1)]);
        var eatFlag = false;

        for (var i = 0; i < blocks.length; i++) {
            if (blocks[i].classList.contains('eat')) {
                eatFlag = true;
                break;
            }
        }

        if (!eatFlag) {
            eat.addClass('eat');
        }
    }
}

let snake = new Snake({
    element: document
});

snake.gameLoop();



