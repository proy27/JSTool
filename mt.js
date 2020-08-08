function hiddmenu2(t) {
			$('#' + t).hide();
}
function showmenu2(obj, objname, url) {
    var target = obj;
    var target = target.offsetParent;
    var x = 0;
    var y = 0;
    while (target) {
        x += target.offsetLeft;
        y += target.offsetTop;

        target = target.offsetParent
    }
    y += 25
    if ($('#' + objname).length) {
        $('#' + objname).show();
        return;
    }
    $('body').append('<div id="' + objname + '" style="display: block; position: absolute; left: ' + x + 'px; top: ' + y + 'px;"><img src="' + url+'" id="tid_420932_img" width="800"  alt="1152X648"></div>')
}
