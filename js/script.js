<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/gh-pages
>>>>>>> e80733d9cb2b9fc5cef59e273e9ae6e6644d7b93
