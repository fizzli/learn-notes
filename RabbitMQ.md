---

---

#RabbitMQ介绍

消息代理和队列服务器

底层使用Erlang语言编写

开源

AMQP协议：高级消息队列协议

![image-20181212165608293](https://ws2.sinaimg.cn/large/006tNbRwly1fy454icysnj30ni0dkdgq.jpg)





集群模式丰富



![image-20181212171618649](https://ws4.sinaimg.cn/large/006tNbRwly1fy42yb5tonj31hd0u04jy.jpg)



保障消息投递可靠性：

![image-20181212180015033](https://ws4.sinaimg.cn/large/006tNbRwly1fy4482x6t6j31h60u0k99.jpg)

# CentOS 7 安装RabbitMQ

0.关闭linxu防火墙

```bash
#关闭防火墙服务
systemctl  stop firewalld.service
#禁止开机自启动
systemctl disable firewalld
```



1.下载erlang，rabbitmq软件

```SHELL
wget http://www.rabbitmq.com/releases/erlang/erlang-19.0.4-1.el7.centos.x86_64.rpm

wget http://www.rabbitmq.com/releases/rabbitmq-server/current/rabbitmq-server-3.6.15-1.el7.noarch.rpm
```



2.安装

```SHELL
yum install erlang-19.0.4-1.el7.centos.x86_64.rpm
yum install rabbitmq-server-3.6.15-1.el7.noarch.rpm
```



3.创建/etc/rabbitmq/rabbitmq.config文件

```shell
[{rabbit,[{loopback_users,[]}]}]
或者修改
vim /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.15/ebin/rabbit.app 
```

4.开启插件 支持浏览器登录

```shell
rabbitmq-plugins enable rabbitmq_management
```

5.启动和关闭服务

```shell
#启动服务
service rabbitmq-server start
或者
systemctl start rabbitmq-server
#关闭服务
service rabbitmq-server stop
或者
systemctl stop rabbitmq-server
```

6.开机自启动

```xml
systemctl enable rabbitmq-server
```

7.日志路径

```shell
#ls1是主机名
/var/log/rabbitmq/rabbit\@ls1.log 
```



# RabbitMQ关键技术

routing key:生产者和Exchange之间的规则

 Exchange Type: Exchange 类型

binding key:Exchange 和 Queue之间的规则