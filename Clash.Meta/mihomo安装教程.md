# 安装 mihomo 的教程 裸核运行Clahs

PS：准备 Debian 或者 Ubuntu 系统，并升级更新更换好lxc的源，推荐SSH工具FinalShell
---
PS：需要开启路由转发功能和开启TUN，教程在最后面
---

## 一、使用以下命令，更新
~~~
apt update && apt dist-upgrade -y
~~~

## 二、使用以下命令，安装必要插件
~~~
apt install -y git
~~~

## 三、下载、安装和配置

### 1、使用以下命令，下载 mihomo 内核
#### ps： mihomo-linux-amd64-compatible-alpha-974332c.gz   可以在此网站查看最新版
[https://github.com/MetaCubeX/mihomo/releases/tag/Prerelease-Alpha]
~~~
wget https://github.com/MetaCubeX/mihomo/releases/download/Prerelease-Alpha/mihomo-linux-amd64-compatible-alpha-974332c.gz
~~~

### 2、使用以下命令，解压文件
~~~
gzip -d mihomo-linux-amd64-compatible-alpha-974332c.gz
~~~

### 3、使用以下命令，授权最高权限
~~~
chmod 777 mihomo-linux-amd64-compatible-alpha-974332c
~~~

### 4、使用以下命令，移动/usr/local/bin/mihomo
~~~
mv mihomo-linux-amd64-compatible-alpha-974332c /usr/local/bin/mihomo
~~~

### 5、使用以下命令，创建 mihomo 文件夹
~~~
mkdir /etc/mihomo
~~~

### 6、使用以下命令，上传配置或者使用以下命令打开并粘贴你的配置文件，按Ctrl+x，按y保存。
#### ps：使用官方推荐配置或者自己按照官方例子填写，也可以使用我提供的名称为mihomo.yaml的文件
~~~
nano /etc/mihomo/config.yaml
~~~

### 7、使用以下命令，安装UI界面
~~~
git clone https://github.com/metacubex/metacubexd.git -b gh-pages /etc/mihomo/ui
~~~

### 8、使用以下命令，创建 systemd 配置文  并
~~~
nano /etc/systemd/system/mihomo.service
~~~

### 9、拷贝下面内全部类容并粘贴进去，按Ctrl+x，按y保存。
~~~
[Unit]
Description=mihomo Daemon, Another Clash Kernel.
After=network.target NetworkManager.service systemd-networkd.service iwd.service

[Service]
Type=simple
LimitNPROC=500
LimitNOFILE=1000000
CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH
AmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH
Restart=always
ExecStartPre=/usr/bin/sleep 1s
ExecStart=/usr/local/bin/mihomo -d /etc/mihomo
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=multi-user.target
~~~

## 四、启动mihomo
##### 依次运行下面命令

### 1、使用以下命令，重新加载 systemd
~~~
systemctl daemon-reload
~~~

### 2、使用以下命令，启用 mihomo 服务：
~~~
systemctl enable mihomo
~~~

### 3、使用以下命令，立即启动 mihomo
~~~
systemctl start mihomo
~~~

### 4、使用以下命令，检查 mihomo 的运行状况
~~~
systemctl status mihomo
~~~

### 5、使用以下命令，检查 mihomo 的运行日志
~~~
journalctl -u mihomo -o cat -e
~~~

## 五、开启路由转发
### 1、





































