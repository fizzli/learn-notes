# 重装CentOS遇到的问题

1. 没有网络

   * 编辑/etc/sysconfig/network-scripts/ifcfg-[ens33]  ens33是网卡名字。修改ONBOOT=yes。使用dhcp方式分配ip。

2. 没有ifconfig命令

   * 使用 yum provides ifconfig 命令找到包含ifconfig命令的软件包net-tools。然后使用yum install 命令下载软件包。

3. 本地ssh连接不上

   报错误：WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

   * 按照提示删除对应位置的密钥。

4. 安装vim

   * 使用 yum -y install vim 安装vim工具 

5. 安装jdk

   * 使用 yum list|grep jdk 查看jdk版本 

   * 使用yum -y install java-11-openjdk.x86_64 安装jdk

     -----

   * 另一个方法安装jdk

   * 去oracle官网下载rpm包，直接使用yum -y install 安装

6. 安装oracle数据库

   * 安装过程参考https://blog.csdn.net/zwl18210851801/article/details/80774980

   * 设置自启动参考https://blog.csdn.net/condywl/article/details/57129696?utm_source=blogxgwz6

7. 