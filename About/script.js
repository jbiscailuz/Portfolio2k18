$(document).mousemove(function(e) {
    $('.cursor1').offset({
        left: e.pageX,
        top: e.pageY + 20
    });

    $('.cursor2').offset({
        left: e.pageX + 30,
        top: e.pageY + 60
    });
});
