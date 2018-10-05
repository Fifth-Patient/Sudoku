import $ from 'jquery'
import Grid from './ui/grid'
import PopupNumbers from './ui/popupnumbers'

const grid = new Grid($('#container'));
const popupNumbers = new PopupNumbers($("#popupNumbers"));

grid.build(1);
grid.layout();
grid.bindPopup(popupNumbers);
grid.interaction({
  check: '#check',
  reset: '#reset',
  clear: '#clear',
  rebuild: '#rebuild'
});


