// Select color input
// Select size input
var height, width, canvas, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){

  event.preventDefault();

  makeGrid();

});

function makeGrid() {

  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  canvas = $('#pixelCanvas');

  canvas.empty();

  for (var i = 0; i < height; i++) {

      canvas.append('<tr></tr>');

      for (var j = 0; j < width; j++){

        canvas.children().last().append('<td></td>');
    }
  }
  //color handler
}
