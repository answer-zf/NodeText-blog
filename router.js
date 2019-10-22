var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function(req, res) {
  res.render('index.html')
})

router.get('/login', function(req, res) {
  res.render('login.html')
})

router.post('/login', function(req, res) {})

router.get('/register', function(req, res) {
  res.render('register.html')
})

router.post('/register', function(req, res) {
  // 1. 获取表单提交的数据
  //    - req.body
  // 2. 操作数据库
  //    - 判断该用户是否存在
  //    - 存在 不允许注册， 不存在 ，注册
  // 3. 发送响应
  var body = req.body
  User.findOne(
    {
      $or: [
        {
          email: body.email
        },
        {
          nickname: body.nickname
        }
      ]
    },
    function(err, data) {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: 'Server error'
        })
      }
      if (data) {
        return res.status(200).json({
          err_code: 1,
          message: 'Email or nickname already exists'
        })
      }
      // 对密码进行加密
      body.password = md5(md5(body.password))
      new User(body).save(function(err, data) {
        if (err) {
          return res.status(500).json({
            err_code: 500,
            message: 'Server error'
          })
        }
      })

      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })
    }
  )
})

module.exports = router
