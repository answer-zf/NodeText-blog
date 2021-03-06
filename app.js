var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use(
  '/node_modules/',
  express.static(path.join(__dirname, './node_modules/'))
)

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录

// 配置解析表单 POST 请求体插件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置 session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  })
)

// 路由挂载到 app 中
app.use(router)

// 配置一个处理 404 的中间件
app.use(function(req, res) {
  res.render('404.html')
})

// 配置一个全局处理中间件
app.use(function(err, req, res, next) {
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

app.listen(3000, function() {
  console.log('running...')
})
