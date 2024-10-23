Open Torch

项目简介

Open Torch Store 是各個 Open Torch Mini App 的入口

项目大纲

主要技术栈： Ts 、React（Mui + telegram-apps/sdk-react）、TailwindCss



 Mui： https://v5.mui.com/material-ui/getting-started/ v5.16.7

 TailwindCss： https://tailwind.nodejs.cn/docs/installation v3.4

 telegram-apps/sdk-react：

 https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x 、    https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react/2-x 

`telegram-apps-sdk-react 是把 telegram-apps-sdk 包进去了，所以导库的时候怎么从 telegram-apps-sdk 导就怎么从 telegram-apps-sdk-react 导`



项目目录

```
**├── index.html 入口 HTML
├── package-lock.json
├── package.json 依赖
├── postcss.config.js react） TailwindCss 依赖
├── public
│ └── tonconnect-manifest.json
├── src
│ ├── components 组件
│ ├── index.css 全局 CSS
│ ├── index.tsx 项目启动入口
│ ├── navigation 路由
│ ├── pages 不同的路由页面
│ ├── static 静态资源
│ └── vite-env.d.ts
├── tailwind.config.js TailwindCss 依赖
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```



项目配置

暂无



项目设计
https://app.moqups.com/YYyEEsXn74R1JWFkphNZZsDndU9UuGTP/view/page/a79211c0e



项目启动

```
node.js >= 18
npm install
npm run dev
```

连接 TG 环境

 1.https://ngrok.com/docs/getting-started/ 完成 Setp 1-3 （example setp3：ngrok http http://localhost:5173）

2.打开 TG，查看https://kikitrade.yuque.com/bun8m4/imrgc0/zyskcp5zbclndr1i 的 (二、TG 环境准备),域名输入 ngrok 启动的域名（example url： https://b3c3-8-210-150-3.ngrok-free.app）

3.从 TG 打开 Mini App
