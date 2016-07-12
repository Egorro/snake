
var i = 0;
setInterval(function() {
    $('.row-2 .block').eq(i).addClass('gray');
    $('.block-2').eq(i).addClass('gray');
    i++;
},500);

