const jQuery = require('jquery');
const Grid = require('./ui/grid');
const PopupNumbers = require('./ui/popupnumbers');

window.$ = jQuery;

const grid = new Grid($('#container'));
const popupNumbers = new PopupNumbers($("#popupNumbers"));

grid.build();
grid.layout();
grid.bindPopup(popupNumbers);


$("#check").on("click", e => {
  if (grid.check()) {
    alert("successed!!");
  }
});
$("#reset").on("click", e => {
  grid.reset();
});
$("#clear").on("click", e => {
  grid.clear();
});

$("#rebuild").on("click", e => {
  grid.rebuild();
});
