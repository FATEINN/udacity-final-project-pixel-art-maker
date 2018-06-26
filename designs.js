// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var designCanvas = $("#pixelCanvas");

function makeGrid() {
 
var gridHeight = $("#inputHeight").val();
var gridWidth = $("#inputWeight").val();
designCanvas.append('<tbody></tbody>');

for (let x = 1; x <= gridHeight; x++) {
   designCanvas.find('tbody').append('<tr></tr>');
}
for ( y = 1; y <= gridWidth; y++) {
   designCanvas.find('tr').append('<td></td>');
}
}
designCanvas.on("click","td",function(){
 var colorInput = $("#colorPicker").val();
 $(this).css("background-color", colorInput);
});

function clearGrid(){ 
  $("#pixelCanvas").children().remove();
};

$(document).ready(function () {
$("#button").on('click', function (event) {
event.preventDefault();
   clearGrid();
   makeGrid();
});
});