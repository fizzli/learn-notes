# linux常用命令

```
命令格式：命令 [-选项] [参数]
```

文件的归属分类：所有者，所属组，其他人

## 目录处理命令

ls -a -l -h -d -i

mkdir -p(递归创建目录)

cd  .(当前目录) ..(上级目录)

pwd

rmdir (删除空目录)

cp (复制) -r(复制目录) -p(保存文件属性(如：创建日期等))

mv(剪切/重命名) 源文件 目的文件

rm(删除) -r(删除目录) -f(强制删除)



## 文件处理命令

touch(创建空文件)

cat(浏览文件内容) -n(行号)

tac(倒叙显示文件内容)

more(分页浏览文件内容)

less(分页 可以向上翻页/搜索)

head(浏览文件前几行) -n(行号)

tail(浏览文件后几行) -n(行号) -f(动态显示)

## 链接命令

ln(硬链接) -s(软连接)     eg:ln -s [软连接文件] (所在路径)

软连接：相当于快捷方式

硬链接：相当于拷贝并保存属性(cp -p) 可是时时同步两个文件内容

## 权限管理命令

chmod -R(递归修改) (u(用户) g(用户组) o(其他组)) eg:chomd u+r,g+r xx.txt

对文件有w权限，则可以修改该文件，是否可以删除要看他上级目录的权限

对目录有w权限，则可以在目录中创建、删除文件

chown(改变文件所有者)

chgrp(改变文件所属组)

umask

## 文件搜索命令

find / -name -iname -size -a(and) -o(or) -type {f文件 d目录 l软链接} -user -group -amin -cmin(属性更改) -mmin(内容更改) -inum

locate 文件名  -i(不区分大小写)      配合updated 更新文件资料库

which 命令 查找命令

whereis 命令 查找命令

grep -i(不区分大小写) -v(排除所写字段)  查找文件内容   eg: grep sss /home/lishan/lishan.txt 

## 帮助命令

man 命令/配置文件

whatis 命令/配置文件 查看命令的简短的信息

命令 --help 

info 命令

help 命令 内置命令 帮助

apropos 配置文件

## 用户管理命令

useradd 用户名

passwd 用户名 设置用户密码

who   tty本地登陆 pts远程登陆

w 更详细的linux登陆信息

update linux启动持续时间

## 压缩解压命令

.gz 压缩文件       压缩：gzip    解压：gunzip或者gzip -d   只能压缩文件

tar -cvzf   (打包/显示详细信息/压缩/指定文件名)  tar -zcvf 

tar -xvzf 解压 tar -zxvf   

zip -r(压缩目录)   unzip  解压

bzip2 -k (压缩后保留原文件)   压缩率比较好   bunzip2 -k

## 网络命令

write 用户名  给其他在线用户发信息   ctrl+D保存结束

wall 给所有在线用户发信息  包括自己

ping -c(指定次数)

ifconfig 查看设置网卡信息

mail 用户名    发邮件

last 列出目前与过去登入系统的用户信息

lastlog -u (uid)

traceroute 路由

netstat -t(tcp) -u(udp) -l(监听) -r(路由) -n(显示ip地址和端口)

netstat -tlun  || netstat -an || netstat -rn

setup 配置

mount  挂载   eg: mount /dev/sr0 /mnt    

umount 脱载

ip addr 查看本机ip地址



## 关机重启命令

shutdown -h now 马上关机  shutdown -h 时间 指定时间     -r(重启) -c (取消前一个关机命令)

runlevel 查看系统运行级别

logout 退出

# VIM

vim 文件名 如果文件不存在则新建

## 命令模式

dd删除一行

x删除一个字符 nx删除n个字符

yy复制当前行   nyy复制当前光标下n行  p黏贴 dd剪切

$行尾    ^行首

G最后一行 gg第一行 XG第X行



# 软件包管理

## RPM

### 安装与升级

rpm -ivh  软件包全名  (install<安装> ，verbose<显示详细信息> hash<显示进度>) 安装

rpm -U 包全名 升级

###查询

查询已经安装的软件: rpm -qa |grep jdk  -q(query)查询   -a(all)    rpm -qa 包名

rpm -qi  包名 软件包信息

rpm -ql 包名 查询软件包安装位置

rpm -qf 系统文件名 查询系统文件属于哪个软件包

rpm -qR 包名 查询依赖  

rpm -qRp 包名 查询未安装软件包的依赖

###RPM包校验

rpm -V 包名

卸载: rpm -e 包名

## YUM

配置ip

网卡配置信息文件：/etc/sysconfig/network-scripts/ifcfg-ens33 

yum源：/etc/yum.repos.d/CentOS-Base.repo .... 等等其他的也是

###YUM软件包命令

查询yum库中软件：yum list | grep jdk

安装：yum -y install 包名  (-y yes)

更新：yum -y update 包名

卸载： yum -y remove 包名

###YUM软件组管理命令

yum grouplist 列出所有的可用软件组

安装指定软件组：yum groupinstall "软件组名" 

卸载指定软件组：yum groupremove "软件组名"

### 光盘yum源搭建

1.挂载光盘

2.让网络yum源文件失效  改名字

3.修改CentOS-Media.repo  baseurl 改成挂载点路径 enabled=1 gpgcheck=1

## 源码包安装

###RPM和源码包不同

安装位置不同：源码包要手动指定

二进制软件包安装位置：

/etc 配置文件

/usr/bin 执行文件

源码包一般指定位置：

/usr/local/软件名/

使用RPM包安装的服务可以使用系统的服务管理命令 service启动服务。

源码包不能被系统的服务管理命令service管理。只能通过绝对路径启动。

###安装安装过程

1.下载源码

2.解压 进入目录

3.  ./configure --prefix=/usr/local/包名   软件配置及检查 指定安装路径
4. make 编译
5. make install 安装

关闭防火墙：systemctl stop  firewalld.service

#用户和用户组管理

##用户配置文件

/etc/passwd 用户信息文件

```perl
   1 : 2 : 3 : 4 :   5   :  6  :    7
root : x : 0 : 0 : root  :/root:/bin/bash
用户名:密码:uid:gid:用户说明:家目录:登陆之后的shell
uid:用户id
gid:用户初始组id

初始组(用户有且只有一个)和附加组(可加入其中组，可以多个)

```

/etc/shadow 影子文件

```perl
root:$6$Jy7pmC.EptpCXrnj$v3NK1IDJvfpoVEgNAZiwM//ZTn./5YfaMMMnf5JgZUx6Yu.dk9Q3KQW0DtA0dWm6duA1TZFIZWgwJFgB22i3C0::0:99999:7:::
lishan:$6$IaAeMghh$U9R1rUU2xnSS9wKrKqJs.cnMAJ5i0vSJpONbgaN1OcITYkT6W6GJ72UrNF42kB2OUQMxmtRLdvUXZuZh4eKYW1:17870:0:99999:7:::
用户名:加密密码:密码最后修改时间(时间戳):两次密码的修改间隔:密码的有效期:密码到期前的提示时间:到期后的宽限时间:账号失效时间(时间戳):保留
* !! 没有密码  不能登陆
```

/etc/group 组信息文件

```perl
root:x:0:
lishan:x:1000:
组名:密码:gid:组中附加用户
```

/etc/gshadow 组影子文件

```perl
root:::
lishan:!::
用户名：组密码：组管理员用户名：组中附加用户
```

## 用户管理相关文件

HOME:/home/用户名/        root用户: /root/

email：var/spool/mail/用户名/

用户模版：/etc/skel   新增用户是的模版

## 用户管理命令

###新增用户

> ==useradd [选项] 用户名   ：  -u UID  -d 家目录 -c 用户说明 -g 组名<初始组> -G 组名 <附加组> -s shell==

用户默认值文件： /etc/default/useradd

```shell
# useradd defaults file
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes
```



用户默认密码设置文件：/etc/login.defs

```shell
MAIL_DIR        /var/spool/mail

PASS_MAX_DAYS   99999
PASS_MIN_DAYS   0
PASS_MIN_LEN    5
PASS_WARN_AGE   7

UID_MIN                  1000
UID_MAX                 60000
# System accounts
SYS_UID_MIN               201
SYS_UID_MAX               999

GID_MIN                  1000
GID_MAX                 60000
# System accounts
SYS_GID_MIN               201
SYS_GID_MAX               999

CREATE_HOME     yes

# The permission mask is initialized to this value. If not specified, 
# the permission mask will be initialized to 022.
UMASK           077

# This enables userdel to remove user groups if no members exist.
#
USERGROUPS_ENAB yes

# Use SHA512 to encrypt password.
ENCRYPT_METHOD SHA512

```

###设置密码

>  ==passwd 用户名  -S 查看密码状况 -l 锁定用户 -u解锁用户 --stdin 使用字符串做用户密码==
>
> eg:.   echo '123' | passed --stdin lishan

### 修改用户信息

> ==usermod [选项] 用户名 <选项和useradd相同>==

###修改用户密码状态

> ==chage 用户名 -l 列出密码状态==
>
> eg:.  chage -d 0 lishan   把密码修改日期改为0 ，这样用户一登陆就需要修改密码

### 删除用户 

> ==userdel [-r ] 用户名      :[-r]删除家目录==

### 查看用户ID

> ==id 用户名==

### 切换用户

> ==su - 用户名 -c不切换用户只执行一次==



## 用户组管理命令

###添加组

> ==groupadd [-g GID] 组名==

### 修改用户组

> ==groupmod [-g GID , -n 新组名 ]组名==

### 删除组 

> ==groupdel 组名==
>
> ⚠️注意：初始组中有成员不能删除

### 组添加用户、删除用户

> ==gpasswd -a 用户名 组名 把用户加入某组            -d从某组删除某用户==



### 修改文件所属用户和用户组

> ==chgrp  用户组名    文件名  -R    ||    chown 用户名   文件名  -R==

# 权限管理

## ACL权限





# 说明

###修改主机名则在/etc/hosts中必须修改主机名 否则执行命令非常慢







yum provides 命令  查看命令所在包



