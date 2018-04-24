var stampImage;
var stampSound;

$('body').on('click', '#canvas', function (e) {
  console.log(stampImage);

  var img = $('<img class="sprite">')
    .css({
      "left": e.pageX + 'px',
      "top": e.pageY + 'px',
    })
    .attr('src', window.URL.createObjectURL(stampImage));
  $('#canvas').append(img);
  mySound = new Audio(window.URL.createObjectURL(stampSound));
  mySound.play()
});

$(document).on('change', '#image-file', function () {
  stampImage = this.files[0];
});

$(document).on('change', '#sound-file', function () {
  stampSound = this.files[0];
  console.log(stampSound);
  $('#content').replaceWith('<div id="canvas">');
});

function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }

  // Pass event to removeDragData for cleanup
  removeDragData(ev)
}
<<<<<<< HEAD
=======

$(function() {
    $('#canvas').click(function (e) { //Default mouse Position 
        var posX = $(this).offset().left,
            posY = $(this).offset().top;
        var x = e.pageX - posX;
        var y = e.pageY - posY;
        var sprite = "<img src='DButt.png' class='sprite' style='left:" + x + "px; top:" + y + "px'>";
        $('#canvas').append(sprite);
    });
})

>>>>>>> d6869b445ed81f43e99bfb65a3599c9009151443
