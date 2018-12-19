# 数独游戏

> 慕课网教程，使用构建工具和web技术编写的一个数独游戏

## 采用技术
- H5 LESSS/CSS
- JS、JQ
- Typescript 2.0+

## 前端构建技术
- Node.js 6+ /Yarn
- Gulp、webpack、Babel
- TSC(Typescript Compiler)

## 数据结构 - 数组

第一维：行，9个数组组成，每行是第二层数组

第二维：格，9个数组成

## 游戏算法

递归

菜用一个简单的算法，从数字1开始

失败重算

随机位置，Fisher-Yates洗牌算法

**检查算法** ———— 行、列、宫

**数据抽取** ———— array as result
- 抽取行数据，直接获取
- 抽取列数据，二维映射
- **抽取宫数据** —— 寻找关系

![脚本目录结构](./src/img/js-dir.png)


















## 随机生成

....

## 检查算法

## Api
- `Array.fill()` 填充数组
- `Array.from()` 类数组对象、可遍历对象转为真正数组

## ES5 Array数组方法
- `forEach`      遍历
- `map`          返回新数组
- `fill`         过滤
- `every`        全部逻辑判断通过返回true
- `some`         一个逻辑判断通过返回true
- `reduce`       组合数组元素生成单个值
- `reduceRight`  从右开始
- `indexOf`      搜索元素
- `lastIndexOf`  从右搜索元素


# ts-version
- 声明类成员
- 声明类型

## 常见类型

||||
|:-:|:-:|:-:|
|Boolean|Tuple|Any|
|Number|Enum|Void|
|String|interface|Null|
|Array|class|Undefined|
|...|...|Never|


## ts改写js - 步骤
- 添加typescript配置文件
- 改写webpack.config.js使其转译.ts文件


# Todo
- [] ts:any
