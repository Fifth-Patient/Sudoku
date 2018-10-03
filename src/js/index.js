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
    if (confirm("successed!!  One More??")) {
      grid.rebuild();
    }
  }
});
$("#reset").on("click", e => {
  if (confirm("Are you sure reset?")) {
    grid.reset();
  }
});
$("#clear").on("click", e => {
  grid.clear();
});

$("#rebuild").on("click", e => {
  if (confirm("Are you sure rebuild?")) {
    grid.rebuild();
  }
});
