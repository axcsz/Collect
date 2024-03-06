# AdGuardHome 安装教程

- PS：PVE下的LXC安装教程

- PS：准备 Debian 或者 Ubuntu 系统，并升级更新更换好[LXC的源](https://github.com/axcsz/Collect/blob/master/ProxmoxVE/ProxmoxVE-8.1%E6%BA%90.md)，推荐SSH工具[MobaXterm](https://mobaxterm.mobatek.net/download.html)、[FinalShell](https://www.hostbuf.com/t/988.html)

- PS：如果使用第三方工具需要先开启允许登录


## 一、使用以下命令，更新
~~~
apt update && apt dist-upgrade -y
~~~

## 二、使用以下命令，安装必要插件
~~~
apt install -y curl
~~~

## 三、使用以下命令，一键安装
~~~
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
~~~


## 一、开启ROOT命令
### 1、使用以下命令，进入sshd_config文件
~~~
nano /etc/ssh/sshd_config
~~~

### 2、找到下面内容
~~~
#PermitRootLogin prohibit-password 
~~~

### 3、修改成、按Ctrl+x，再按y保存、按回车建、并输入 reboot 重启
~~~
PermitRootLogin yes
~~~
