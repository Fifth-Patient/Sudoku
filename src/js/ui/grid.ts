// 生成九宫格
import Sudoku from '../core/sudoku'
import Checker from '../core/checker'

class Grid {

  private _$container;

  constructor(container) {
    this._$container = container;
  }

  build() {

    const sudouku = new Sudoku();
    sudouku.make();
    const matrix = sudouku.puzzleMatrix;

    const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];

    const colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];

    const $cells = matrix.map((rowValues) => rowValues
      .map((cellValue, colIndex) => {
        return $("<span>")
          .addClass(colGroupClasses[colIndex % 3])
          .addClass(cellValue ? "fixed" : "empty")
          .text(cellValue);
      }));

    $divArray = $cells.map(($spanArray, rowIndex) => {
      return $("<div>")
        .addClass("row")
        .addClass(rowGroupClasses[rowIndex % 3])
        .append($spanArray);
    });

    this._$container.append($divArray);
  }

  layout() {
    const width = $("span:first", this._$container).width();
    $("span", this._$container)
      .height(width)
      .css({
        "line-height": `${width}px`,
        "font-size": width < 32 ? `${width / 2}px` : ""
      })
  }

  /**
   * 重建新的谜盘，开始新的一局
   */
  rebuild() {
    this._$container.empty();
    this.build();
    this.layout();
  }

  /**
   * 检查用户解密结果，成功则提示，失败则标记
   */
  check() {
    // 从界面获取要检查的数据
    const $rows = this._$container.children();
    const data = $rows
      .map((rowIndex, div) => {
        return $(div).children()
          .map((colIndex, span) => parseInt($(span).text()) || 0);
      })
      .toArray()
      .map($data => $data.toArray());

    const checker = new Checker(data);
    if (checker.check()) {
      return true;
    }

    // 检查不成功，进行标记
    const marks = checker.matrixMarks;
    this._$container.children()
      .each((rowIndex, div) => {
        $(div).children().each((colIndex, span) => {
          const $span = $(span);
          if ($span.is(".fixed") || marks[rowIndex][colIndex]) {
            $span.removeClass("error");
          } else {
            $(span).addClass("error");
          }
        });
      });
  }

  /**
   * 重置当前谜盘当初始状态
   */
  reset() {
    this._$container.find("span:not(.fixed)")
      .removeClass("error mark1 mark2")
      .addClass("empty")
      .text(0);
  }

  /**
   * 清理错误标记
   */
  clear() {
    this._$container.find("span.error")
      .removeClass("error");
  }

  bindPopup(popupNumbers) {
    this._$container.on("click", "span", e => {
      const $cell = $(e.target);
      if ($cell.is(".fixed")) {
        return;
      }
      popupNumbers.popup($cell);
    })
  }
}

export default Grid;