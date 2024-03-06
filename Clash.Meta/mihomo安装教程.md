# 安装 mihomo 的教程 裸核运行Clahs

- PS：PVE下的LXC安装教程

- PS：准备 Debian 或者 Ubuntu 系统，并升级更新更换好[LXC的源](https://github.com/axcsz/Collect/blob/master/ProxmoxVE/ProxmoxVE-8.1%E6%BA%90.md)，推荐SSH工具[MobaXterm](https://mobaxterm.mobatek.net/download.html)、[FinalShell](https://www.hostbuf.com/t/988.html)

- PS：需要开启路由转发功能和开启TUN，教程在最后面


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
- PS： mihomo-linux-amd64-compatible-alpha-974332c.gz   可以点击查看[最新版](https://github.com/MetaCubeX/mihomo/releases/tag/Prerelease-Alpha)，也可以安装以后在升级
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
- ps：使用官方推荐配置或者自己按照官方例子填写，也可以使用我提供的名称为[mihomo.yaml](https://github.com/axcsz/Collect/blob/master/Clash.Meta/mihomo.yaml)的文件
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

### 9、拷贝下面内全部类容，粘贴进去，按Ctrl+x，按y保存。
- PS：也可以在[官网](https://wiki.metacubex.one/startup/service/)复制
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
#### 依次运行下面命令

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
- PS：此操作是用SSH工具连接LXC
### 1、使用以下命令，打开
~~~
nano /etc/sysctl.conf
~~~

### 2、拷贝下面内全部类容，粘贴进去，按Ctrl+x，按y保存。
~~~
net.ipv4.ip_forward = 1
~~~

## 六、开启TUN
- PS：此操作是用SSH工具连接PVE
### 1、使用以下命令打开（下面的 LXCID 修改成你实际的ID号）
~~~
nano /etc/pve/lxc/LXCID.conf
~~~

### 2、拷贝下面内全部类容，并粘贴进去，按Ctrl+x，按y保存。
~~~
lxc.cgroup2.devices.allow: c 10:200 rwm
lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file
~~~

# 下面类容根据自己需要
- PS：此操作是用SSH工具连接PVE
## 一、LXC网卡直通
### 1、使用以下命令打开（下面的 LXCID 修改成你实际的ID号）
~~~
nano /etc/pve/lxc/LXCID.conf
~~~

### 2、拷贝下面内全部类容，粘贴进去并修改，按Ctrl+x，按y保存。（link是物理网卡设备名称，name是LXC内设备名称）
~~~
lxc.net.0.type: phys
lxc.net.0.link: enp4s0
lxc.net.0.flags: up
lxc.net.0.name: eth0
~~~

## 二、修改IP地址
### 1、使用以下命令打开（下面的 LXCID 修改成你实际的ID号）
- PS：此操作是用SSH工具连接PVE
~~~
lxc-attach 1020
~~~
### 2、使用以下命令打开（下面的 eth0 修改成你实际的网卡）
~~~
nano /etc/systemd/network/eth0.network
~~~
### 3、拷贝下面内全部类容，粘贴进去并修改，按Ctrl+x，按y保存。
- PS：{Address是lan口ip地址，Gateway是网关地址）
~~~
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 192.168.1.2/24
Gateway = 192.168.1.1
DHCP = no
IPv6AcceptRA = false
~~~






















