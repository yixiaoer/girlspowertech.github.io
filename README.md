## 开发

1. 阅读 [团队协作流程](https://github.com/girlspowertech/girlspowertech.github.io/issues/3)

2. 首页开发
  - 安装 node.js 和 npm
  - 安装 pnpm `npm i -g pnpm`
  - 安装依赖并启动项目
    ```sh
    pnpm install
    pnpm run dev

    ```
  - 集成 github ci 自动上传到 gh-pages 分支。也可以手动部署，我后面将开放开 `gh-pages` 分支的 push 权限。
    ```sh
    pnpm build
    pnpm run deploy
    ```