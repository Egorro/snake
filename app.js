
var x = 4,
    y = 0,
    speed = 500,
    snakeLength = 3;
setInterval(function() {
    //horizontalMotion();
    verticalMotion();

    function horizontalMotion () {
        var row = $('.row-' + y + ' .block');

        moving(row, x);
        console.log('x=' + x);
        x++;
        if (x > 10) {
            x = 0;
        }
    }

    function verticalMotion () {

        var col = $('.block-' + x);

        moving(col, y);
        console.log (y);
        if (y < 10) {
            y++;
        } else {
            y = 0;
        }
    }

    function moving (el, i) {
        el.eq(i).addClass('gray');
        el.eq(i - snakeLength).removeClass('gray');
    }
}, speed);

