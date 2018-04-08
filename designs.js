var color;// Select color input

color = $('#colorPicker').val();// Select size input

var height, width;

height = $('#inputHeight').val();
width = $('#inputWidth').val();

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {// Your code goes here!
  for(var i = 0; i < height; i++){

    var table, rows;

    table = $('#pixelCanvas');
    rows = $('<tr></tr>');

    table.append(rows);

    for(var j = 0; j < width; i++){

      var newRows, columns;

      newRows = $('tr');
      columns = $('<td></td>');

      table.append(columns);
    }
  }
}
