
var x = 4,
    y = 5,
    speed = 400,
    snakeLength = 3,
    timerRight,
    timerDown;

function gameLoop () {
    setInterval(function () {

    }, speed)
}

gameLoop();

document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);

    switch (e.keyCode) {
        case 40:
    }

    if (e.keyCode == 40) { // вниз
        clearInterval(timerRight);
        verticalMotion();
    }
    if (e.keyCode == 39) { // вправо
        console.log(true);
        clearInterval(timerDown);
        horizontalMotion();
    }
});

function verticalMotion () {
    var col = $('.block-' + x);

    moving(col, y);

    if (y < 9) {
        y++;
    } else {
        y = 0;
    }
}

function horizontalMotion () {
    var row = $('.row-' + y + ' .block');

    timerRight =  setInterval(function() {
        moving(row, x);
        x++;
        if (x > 9) {
            x = 0;
        }
    }, speed);
}

function moving (el, i) {
    el.eq(i).addClass('gray');
    el.eq(i - snakeLength).removeClass('gray');
}


