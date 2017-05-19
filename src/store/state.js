export default {
  index: 0,//当前题目索引
  score: 0,//分数
  limitTime: 5000,//每题限时
  allTime: 0,//总耗时
  time: 0,//每题计时
  total: 10,//出题数目
  canStart: false,//游戏是否允许开始,数据还没拉取回来前不能开始
  gameStart: false,//游戏是否开始
  gameOver: false,//游戏是否结束
  questions: []
}