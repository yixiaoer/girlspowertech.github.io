## 开发

1. 阅读 [团队协作流程](https://github.com/girlspowertech/girlspowertech.github.io/issues/3)

2. 首页开发
  - 安装 node.js 和 npm
  - 安装 pnpm `npm i -g pnpm`
<details>
  <summary>Windows 环境下</summary
                        
可以使用PowerShell用以下命令：

```sh
iwr https://get.pnpm.io/install.ps1 -useb | iex
```
    
   安装成功后 `pnpm`已经被加入环境变量，但可能在 VS Code 会有以下提示：
   
  > pnpm : 无法加载文件 C:\Users\fishm\AppData\Roaming\npm\pnpm.ps1。未对文件 C:\Users\fishm\AppData\Roaming\npm\pnpm.ps1 进行数字签名。无法在当前系统上运行该脚本。有关运行脚本和设置执行策略的详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。所在位置 行:1 字符: 1
  
  需要以管理员身份运行 PowerShell, 输入以下命令：
  
```sh
set-ExecutionPolicy RemoteSigned
```
选择A修改策略
</details>

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

