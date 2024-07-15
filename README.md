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
  - 集成 github ci 自动上传到 gh-pages 分支。也可以执行下列命令手动部署。
    ```sh
    pnpm build
    pnpm run deploy
    ```

3. 更新 profile
   1. 编辑 `workers.json`
   2. R 环境下运行 `cross.r` (已集成 CI 自动更新)

