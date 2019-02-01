# docker

##安装docker

```shell
curl -fsSL get.docker.com -o get-docker.sh 

sh get-docker.sh --mirror Aliyun
```



## 配置国内镜像

```shell
vim /etc/docker/daemon.json
```



添加：

```shell
{"registry-mirrors":["https://registry.docker-cn.com"]}
```

重启：

```shell
systemctl restart docker
```



## 拉取/查看/运行镜像

```shell
#拉取
docker pull tomcat
#查看镜像
docker images
#运行
docker run -p 8080:8080 tomcat

##交互方式进入容器
docker exec -it --rm containerID bash


##拉取一个ubuntu 系统
docker pull ubuntu:18.04
##交互方式运行 
docker run -it --rm ubuntu:18.04 bash

##查看正在运行容器
docker ps

##查看所有容器 包括已经退出但未删除的
docker ps -a

## 删除容器
docker rm containerId
eg.: docker rm e96e922763bc
```

## 虚悬镜像

由于镜像更新，导致虚悬镜像。

```shell
##删除虚悬镜像
docker image prune
```



## 删除本地镜像

```shell
docker image rm [imageId/repository:tag]
或
docker rmi [imageId/repository:tag]

eg.:
docker image rm java:latest
```

## Dockerfile 定制镜像

新建Dockerfile文件

构建定制镜像

```shell
docker build -t mytomcat .

#.表示当前目录
```





## 守护态启动容器

```shell
# -p 端口号 --name 指定名称 -d 后台运行
docker run -d -p 8080:8080 --name tomcat8080  tomcat
```



## 数据卷

docker容器中的数据持久化

-v 挂载数据卷中数据

```shell
docker run -d -p 8080:8080 --name tomcat8080 -v /usr/local/tomcat/ROOT:/usr/local/tomcat/webapps/ROOT tomcat
```





## 查看日志

```shell
docker logs 容器名
##一直监听
docker logs -f 容器名
```



# Docker Compose

服务：一个应用容器，实际上可以运行多个相同镜像的实例。

项目：一组关联的应用容器组成一个完整的业务单元。

docker compose 就是为了快速的搭建一个项目。面向项目进行管理。 



## 安装Docker Compose

```shell
#1.安装
curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

#2.添加执行权限
cd /usr/local/bin
chmod +x docker-compose
```



## 使用docker-compose

```shell
#新建docker-compose.yml
vim docker-compose.yml

##添加内容
version: '3'
services:
        tomcat:
                restart: always
                image: tomcat
                container_name: tomcat
                ports:
                        - 8080:8080
                        
##执行
docker-compose up 
```





## jenkins docker-compose.yml

```shell
version: '3'
services:
        jenkins:
                image: 'jenkins/jenkins:lts'
                restart: always
                container_name: jenkins
                ports:
                        - 8080:8080
                        - 5000:5000
                environment:
                        JAVA_OPTS: "-Djava.awt.headless=true -Duser.timezone=Asia/Shanghai"
                volumes:
                        - '/usr/local/docker/jenkins/jenkins_home:/var/jenkins_home'
```









