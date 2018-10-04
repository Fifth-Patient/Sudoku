
export interface IBoxCorrd {
  boxIndex: number,
  cellIndex: number
}

export interface IRowcolCorrd {
  rowIndex: number,
  colIndex: number
}
/**
 * 宫坐标系工具
 */
const boxToolkit = {
  getBoxCells(matrix: number[][], boxIndex: number): number[] {
    const startRowIndex = Math.floor(boxIndex / 3) * 3;
    const startColIndex = boxIndex % 3 * 3;
    const result = [];

    for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
      const rowIndex = startRowIndex + Math.floor(cellIndex / 3);
      const colIndex = startColIndex + cellIndex % 3;
      result.push(matrix[rowIndex][colIndex]);
    }
    return result;
  },
  covertToBoxIndex(rowIndex: number, colIndex: number): IBoxCorrd {
    return {
      boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
      cellIndex: rowIndex % 3 * 3 + colIndex % 3
    }
  },

  covertFromBoxIndex(boxIndex: number, colIndex: number): IRowcolCorrd {
    return {
      rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(colIndex / 3),
      colIndex: boxIndex % 3 * 3 + colIndex % 3
    }
  }
}

/**
 * 矩阵和数据相关的功能
 */
class MatrixToolkit {
  // 初始化生成9个元素的一维数组
  static makeRow(): number[];
  static makeRow<T>(v: T): T[];
  static makeRow(v: any = 0): any[] {
    const array = new Array(9);
    array.fill(v);
    return array;
  }

  // 初始化生成9*9的二维数组
  static makeMatrix(): number[][];
  static makeMatrix<T>(v: T): T[][];
  static makeMatrix(v: any = 0) {
    return Array.from({ length: 9 }, () => this.makeRow(v))
  }

  /**
   * Fisher-Yates 洗牌算法
   */
  static shuffle<T>(array: T[]): T[] {
    const endIndex = array.length - 2;
    for (let i = 0; i < endIndex; i++) {
      const j = i + Math.floor(Math.random() * (array.length - i));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * todo 检查指定位置是否可填写
   */
  static checkFillable(matrix: number[][], n: number, rowIndex: number, colIndex: number): boolean {
    const row = matrix[rowIndex];
    const column = this.makeRow().map((v, i) => matrix[i][colIndex]);
    const { boxIndex } = boxToolkit.covertToBoxIndex(rowIndex, colIndex);
    const box = boxToolkit.getBoxCells(matrix, boxIndex);
    for (let i = 0; i < 9; i++) {
      if (row[i] === n || column[i] === n || box[i] === n) {
        return false;
      }
    }
    return true;
  }
}

// 工具集
export default class Tookit {

  /**
   * 矩阵和数据相关的功能
   */
  static get matrix(): typeof MatrixToolkit {
    return MatrixToolkit;
  }

  /**
   * 宫坐标系工具
   */
  static get box() {
    return boxToolkit;
  }
};
