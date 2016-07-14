
var x = 4,
    y = 5,
    speed = 400,
    snakeLength = 3;

document.addEventListener('keydown', function(e) {
    if (e.keyCode = 40) {
        verticalMotion();
    }
    //if (e.keyCode = 39) {
    //    horizontalMotion();
    //}
});

function verticalMotion () {
    var col = $('.block-' + x);

    setInterval(function() {
        moving(col, y);
        //console.log (y);
        if (y < 9) {
            y++;
        } else {
            y = 0;
        }
    }, speed);
}

function horizontalMotion () {
    var row = $('.row-' + y + ' .block');

    setInterval(function() {
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


