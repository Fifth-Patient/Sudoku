/**
 * 矩阵和数据相关的功能
 */
const matrixToolkit = {
  // 初始化生成9个元素的一维数组
  makeRow(v = 0) {
    const array = new Array(9);
    array.fill(v);
    return array;
  },
  // 初始化生成9*9的二维数组
  makeMatrix(v = 0) {
    return Array.from({ length: 9 }, () => this.makeRow(v))
  },
  /**
   * Fisher-Yates 洗牌算法
   */
  shuffle(array) {
    const endIndex = array.length - 2;
    for (let i = 0; i < endIndex; i++) {
      const j = i + Math.floor(Math.random() * (array.length - i));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
}

/**
 * 宫坐标系工具
 */

const boxToolit = {
  // Todo
}

// 工具集

module.exports = class Tookit {

  /**
   * 矩阵和数据相关的功能
   */
  static get materix() {
    return matrixToolkit;
  }

  /**
   * 宫坐标系工具
   */
  static get box() {
    return boxToolit;
  }
};
