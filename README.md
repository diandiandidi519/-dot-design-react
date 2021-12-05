## @dot-design/react library

## 使用 React+Typescript 从零到一打造一套你自己的组件库



@dot-design，使用 React Hooks 和 Typescript。从零到一，由浅入深的使用React 和 Typescript 打造属于自己的UI组件库




## 安装最后已经发布的组件库来试试

~~~javascript
npm install @dot-design/react --save
~~~

## 使用

~~~javascript
// 加载样式
import '@dot-design/react/dist/index.css'
// 引入组件
import { Button } from '@dot-design/react'
~~~

## 项目亮点

* 🔥Typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 addon-docs 自动生成文档
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)
* 🌹样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法
* 🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等

## 一些本地开发命令

~~~bash
//启动本地环境
npm run storybook

//跑单元测试
npm test

//build可发布静态文件
npm run build

//发布到 npm
npm run publish
~~~