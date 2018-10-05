import $ from 'jquery'

// 弹出面板
class PopupNumbers {

  private _$panel: JQuery = $();
  private _$targetCell: JQuery = $();

  constructor($panel: JQuery) {
    this._$panel = $panel.hide().removeClass("hidden");


    this._$panel.on("click", e => {

      if ($(e.target).is(this._$panel)) {
        this.hide();
        return;
      }

      const $cell = this._$targetCell;
      const $span = $(e.target);

      if ($span.hasClass("mark1")) {
        // mark1、mark2 回填样式
        if ($cell.hasClass("mark1")) {
          $cell.removeClass("mark1");
        } else {
          $cell.removeClass("makr2")
            .addClass("mark1");
        }
      } else if ($span.hasClass("mark2")) {
        if ($cell.hasClass("mark2")) {
          $cell.removeClass("mark2");
        } else {
          $cell.removeClass("makr1")
            .addClass("mark2");
        }
      } else if ($span.hasClass("empty")) {
        // empty，取消数字填写，取消mark
        $cell.text(0)
          .removeClass("mark1")
          .removeClass("mark2")
          .addClass("empty");
      } else {
        $cell.removeClass("empty").text($span.text());
        // 1-9 填数字        
      }

      this.hide();
    })
  }

  popup($cell: JQuery) {
    this._$targetCell = $cell;
    let { left, top } = $cell.position();
    let cellWidth: number | undefined;
    let cellHeight: number | undefined;

    if ($cell.width()) {
      cellWidth = $cell.width();
    }

    if ($cell.height()) {
      cellHeight = $cell.height();
    }

    left = left >= Math.floor(Number(cellWidth) * 7.5) ? Math.floor(Number(cellWidth) * 7) : left;
    top = top >= Math.floor(Number(cellHeight) * 7.5) ? Math.floor(Number(cellHeight) * 7) : top;

    // let num = Math.round(1 + Math.random() * (4 - 1));

    this._$panel.children()
      .css({
        left: `${left}px`,
        top: `${top}px`,
        // background: `url(./dist/img/bg-${num}.jpg) no-repeat`,
        // backgroundSize: "100% 98%"
      })
    this._$panel.show();
  }

  hide() {
    this._$panel.hide();
  }
}

export default PopupNumbers;
