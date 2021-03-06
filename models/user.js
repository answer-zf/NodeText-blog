var mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

// 设计文档结构（设计Schema）
var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    enum: [0, 1, 2], // 0: 没有权限限制，1：不可以评论，2：不可以登录
    default: 0
  }
})

// 将文档结构发布模型（发布model）
module.exports = mongoose.model('User', userSchema)
