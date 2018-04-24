$(function() {
    $('#canvas').click(function (e) { //Default mouse Position 
        var posX = $(this).offset().left,
            posY = $(this).offset().top;
        var x = e.pageX - posX;
        var y = e.pageY - posY;
        var sprite = "<img class='sprite' style='left:" + x + "px; top:" + y + "px'>";
        $('#canvas').append(sprite);
    });
})
