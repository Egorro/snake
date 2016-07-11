
var i = 1;
var runSnake = setInterval(function() {
    $('.block-' + i).addClass('gray');
    i++;
},1000);

