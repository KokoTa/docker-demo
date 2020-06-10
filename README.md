<!--
 * @Author: KokoTa
 * @Date: 2020-06-09 19:45:56
 * @LastEditTime: 2020-06-10 10:28:47
 * @Description: Docker 学习示例
-->

# Docker 学习示例

## nginx

通过 docker 起一个 nginx 服务，该服务可以让宿主机 80 端口访问网站

构建步骤：

1. cd 到相关目录
2. `docker build -t "kokota/knginx" .`
3. `docker-compose up -d`

## node

通过 docker 打包一个 node 服务，该服务包含了 node 和 redis 环境，相当于让代码跑在沙盒环境中

docker-compose 启动会生成独立网桥，对于多个互联的容器来说，需要自定义网桥，制定静态 IP 防止动态 IP

构建步骤：

1. cd 到相关目录
2. `docker build -t "kokota/knode" .`
3. `docker-compose up -d`

## jenkins

**jenkinsci/blueocean** 是一个 pipline 构建插件，非常方便实用，非常推荐

通过 [本地构建示例](https://www.jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/) 可以学习到如何简单使用 blue ocean 构建本地应用

通过 [远程构建示例](https://www.jenkins.io/zh/doc/tutorials/create-a-pipeline-in-blue-ocean/) 可以学习到如何简单使用 blue ocean 构建远程库应用

通过 [Webhook 示例](https://embeddednature.com/2019/01/jenkins-installation-guide-with-blue-ocean-setup-and-github-integration/) 可以学习到如何使用 webhook 来完成项目提交后自动执行构建

如果出现 `ERROR: Error fetching remote repo 'origin'` 错误，删除 jenkins_home/workspace 后重新构建可以解决。[具体解决方案](https://stackoverflow.com/questions/31129417/jenkins-not-able-to-fetch-code-from-remote-git)

启动 jenkins 步骤:

1. cd 到相关目录
2. `docker-compose up -d`
