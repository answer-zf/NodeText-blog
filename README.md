# Node.js 综合案例

## 目录结构

```
.
├─ app.js                 项目入口文件****
├─ controllers
├─ models                 存储使用 mongoose 设计的数据模型
├─ node_modules           第三方包
├─ package.json           包描述文件
├─ package-lock.json      第三方包版本锁定（npm 5 以后才有）
├─ public                 公共静态资源
├─ README.md              项目说明文档
├─ routes                 路由分类存储
└─ views                  存储识图目录
```

## 模板页

- art-template 子模板
- art-template 模板继承

## 路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要登录权限 | 备注         |
| --------- | ---- | ------- | ------------------------- | ---------------- | ------------ |
| /         | GET  |         |                           |                  | 渲染首页     |
| /register | GET  |         |                           |                  | 渲染注册页面 |
| /register | POST |         | email、nickname、password |                  | 处理注册请求 |
| /login    | GET  |         |                           |                  | 渲染登录页面 |
| /login    | POST |         | email、password           |                  | 处理登录请求 |
| /logout   | GET  |         |                           |                  | 处理退出请求 |