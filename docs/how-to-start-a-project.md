---
title: 如何上手一个不熟悉的前端项目？
date: 2024-07-25

tags:
- tutorial

---

## 如何上手一个不熟悉的前端项目？

以下讨论限前端项目，限有一点点开发经验

#### 0. 前端项目工程化

1. 通常采用以下结构（可大致了解下这些目录 / 文件的作用是什么）

    ```
    project-root/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   ├── utils/
    │   ├── App.tsx
    │   └── index.tsx
    ├── package.json
    ├── package-lock.json (or yarn.lock)
    ├── .gitignore
    ├── README.md
    └── build/ (or dist/)
    ```

2. 理解 [package.json](https://juejin.cn/post/6987179395714646024) 文件，它定义了项目的依赖和脚本
3. 使用适当的包管理器（如 npm, yarn, 或 pnpm）
4. 如果遇到依赖相关的问题，尝试删除 node_modules 文件夹和 package-lock.json 或 yarn.lock 或 pnpm-lock.yaml 文件，然后重新安装依赖

#### 1. 了解一下这个项目的技术栈

先确保能够在本地跑起来（node 环境 + README 写的那些 pnpm 相关的命令 ）。然后通过 README.md / package.json 等了解项目采用的技术栈。以主页这个项目为例，提取到的关键字其实就是：

- React
- tailwind （一个控制样式 CSS 库）
- typescript（类型标注）
- react router （控制路由 - 即这个应用对外暴露出什么路径可以访问）
- vite （资源打包工具）

#### 2. 对于 1 ，你可能会说这些关键字我全都不了解，要一个一个花时间去学吗，怎么办？

**完全不用，完完全全不用**

你只需要意识到，这些花里胡哨的东西最终只不过变成 HTML + CSS + JavaScript 这三样东西的组合，你怎么改最终都只是这些产物。我们可以直接上手跑项目，对上面提到的每一 part 进行有目的性的修改，在本地产生变化，然后我们就不会觉得它是一个 myth 了。有了下面的 debug 经验，你对整个项目的了解会好很多，自信心 upup。

1. 了解文件入口 -> 是如何渲染在页面上的 ？
   1. `index.html` 为默认入口 （这是一个国际惯例）

   2. [html 这里](https://github.com/girlspowertech/girlspowertech.github.io/blob/68be196c4801e84c504bf72b036bbf4013938b62/index.html#L15)引用了 `index.tsx`
   3. `index.tsx` 这里[获取 root 元素](https://github.com/girlspowertech/girlspowertech.github.io/blob/68be196c4801e84c504bf72b036bbf4013938b62/src/index.tsx#L6-L13)，将整个 React 应用渲染在这里

2. 以 tailwindcss 为例， 打开文档 https://tailwindui.com/documentation 随便选一个效果在项目内部进行删删改改
3. 以 react router 为例，想新增 /new 这个路径，就在[这个文件](https://github.com/girlspowertech/girlspowertech.github.io/blob/main/src/routes.tsx)改改试试看有什么变化

#### 3. 这个时候再回到正题，我要新增 feature，怎么办？

1. 明确你要实现的功能（如夜间模式、移动端适配），考虑这些功能可能涉及的项目部分（如全局样式、组件、状态管理等）。
2. 看项目是否已有相关的实现或准备工作
   - 了解项目的样式管理方式（如是否使用 CSS-in-JS、如何组织 tailwind 类等）
3. 将项目结构、使用的技术栈和你的需求清晰地描述给 AI，请它设计实现方案

我非常推荐，先把项目结构和目的发给 AI 让它帮你理一理建议方案 （ 截图中对话在 https://poe.com/s/rmH8REOwCKkDwJ4TmIq5 ），这里给出建议的方案其实已经非常完整，可以直接按它提供的方案在项目基础上删改。如果你有额外的什么问题，考虑将大任务分解成小的、可管理的部分，再在 thread 里展开询问。

![Pasted image 20240724231207](https://github.com/user-attachments/assets/fc399e14-3011-4500-b5a5-00664d864b54)

#### 4. 调试技巧

1. 使用浏览器的开发者工具（F12 或右键 -> 检查）来查看控制台输出、网络请求、元素结构等
2. 在代码中使用 `console.log()` 输出变量值或状态，帮助理解代码执行流程
3. 学会使用断点调试：在浏览器开发者工具的 Sources 标签中设置断点，或在代码中使用 debugger 语句

#### 5. 关于 UI

我们团队还没有特别好的流程，在形成一个完整的 PRD 或设计稿这方面。所以在开始写样式之前：

1. 优先找产品 / 设计师讨论一下样式和交互逻辑。最好形成一版设计稿。
2. 如果没有，我个人习惯是在画样式之前先通过 figma 或草稿在纸上画一画基本的布局， 对着一个大致的模子再去写样式会有思路很多。

---

划重点：

## 多试，多改，看文档，问 Google，问 AI
