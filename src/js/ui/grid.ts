// 生成九宫格
import $ from 'jquery';
import Sudoku from '../core/sudoku';
import Checker from '../core/checker';
import Popupnumbers from './popupnumbers';

interface buttonGroup {
  check: string
  reset: string
  clear: string
  rebuild: string
}

class Grid {

  private _$container: JQuery;

  constructor(container: JQuery) {
    this._$container = container;
  }

  build(level: number = 5) {
    const sudouku = new Sudoku();
    sudouku.make(level);
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
    const $divArray = $cells.map(($spanArray, rowIndex) => {
      return $("<div>")
        .addClass("row")
        .addClass(rowGroupClasses[rowIndex % 3])
        .append($spanArray);
    });
    this._$container.append($divArray);
  }

  layout() {
    let width: number | undefined;
    if ($("span:first", this._$container).width()) {
      width = $("span:first", this._$container).width();
    }

    $("span", this._$container)
      .height(`${width}px`)
      .css({
        "line-height": `${width}px`,
        "font-size": Number(width) < 32 ? `${Number(width) / 2}px` : ""
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
    const data: number[][] = this._$container.children()
      .toArray()
      .map((div: HTMLElement): JQuery<number> => {
        return $(div).children()
          .map((colIndex, span) => parseInt($(span).text(), 10) || 0);
      })
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

  bindPopup(popupNumbers: Popupnumbers) {
    this._$container.on("click", "span", e => {
      const $cell = $(e.target);
      if ($cell.is(".fixed")) {
        return;
      }
      popupNumbers.popup($cell);
    })
  }

  /**
   * 交互功能
   */
  interaction(configObj: buttonGroup): void {

    $(configObj.check).on("click", e => {
      if (this.check()) {
        if (confirm("successed!!  One More??")) {
          this.rebuild();
        }
      }
    });

    $(configObj.reset).on("click", e => {
      if (confirm("Are you sure reset?")) {
        this.reset();
      }
    });

    $(configObj.clear).on("click", e => {
      this.clear();
    });

    $(configObj.rebuild).on("click", e => {
      if (confirm("Are you sure rebuild?")) {
        this.rebuild();
      }
    });
  }
}

export default Grid;