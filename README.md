# UI-Application
step1,本地代码上传到github
step2,github webhook push message 到jenkins (部署在本地，用代理域名转发到2000端口)
step3,jenkis进行build并把产物放入目标文件中.
steo4,目标文件夹有koa2 进行server,同时pm2 也在监听，文件变化时会进行重新load.(8000端口)

需要解决的问题
1. jenkins的远程部署到linux
2. pm2在linux的常驻部署

