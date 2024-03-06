# 1. 更新debian 软件源
#(任选一个源)
#1.1.1 清华源
# 参考: https://mirrors.tuna.tsinghua.edu.cn/help/debian/
~~~
sed -i.bak "s#ftp.debian.org/debian#mirrors.tuna.tsinghua.edu.cn/debian#g" /etc/apt/sources.list  
sed -i "s#security.debian.org#mirrors.tuna.tsinghua.edu.cn/debian-security#g" /etc/apt/sources.list
#apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing
~~~

#1.1.2 中科大源
# 参考: https://mirrors.ustc.edu.cn/help/proxmox.html
~~~
sed -i.bak 's|^deb http://ftp.debian.org|deb https://mirrors.ustc.edu.cn|g' /etc/apt/sources.list
sed -i 's|^deb http://security.debian.org|deb https://mirrors.ustc.edu.cn/debian-security|g' /etc/apt/sources.list
#apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing
~~~

#1.1.3 aliyun源
~~~
sed -i.bak "s#ftp.debian.org/debian#mirrors.aliyun.com/debian#g" /etc/apt/sources.list     #修改文件的同时, 会创建一个.bak后缀的备份文件
sed -i "s#security.debian.org#mirrors.aliyun.com/debian-security#g" /etc/apt/sources.list  #阿里Debian源
#apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing
~~~

#1.1.4 163源
~~~
sed -i.bak "s#ftp.debian.org/debian#mirrors.163.com/debian#g" /etc/apt/sources.list     #163Debian源
sed -i "s#security.debian.org#mirrors.163.com/debian-security#g" /etc/apt/sources.list     #163Debian源
#apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing
~~~

# 2. PVE 软件源
# 删除默认企业源
~~~
rm -rf /etc/apt/sources.list.d/pve-enterprise.list
~~~

#(任选一个源)
# 2.1.1 清华源
~~~
echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list

# 2.1.2 中科大源
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
~~~

#3 CEPH分布式源
#3.1.1 中科大源
~~~
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/ceph-quincy bookworm no-subscription" > /etc/apt/sources.list.d/ceph.list     #中科大源
sed -i.bak "s#http://download.proxmox.com/debian#https://mirrors.ustc.edu.cn/proxmox/debian#g" /usr/share/perl5/PVE/CLI/pveceph.pm     #中科大源
~~~

# --------------------------------------------------------
# 更新索引, 升级安装软件包, 重启系统
# --------------------------------------------------------
# 如果无法拉取https软件源时安装
apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing

apt update && apt dist-upgrade


#4.LXC容器仓库源(CT)
# 4.1.1 中科大源
sed -i.bak "s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g" /usr/share/perl5/PVE/APLInfo.pm  
systemctl restart pvedaemon  # 稍等下手动刷新webui 页面


# 删除订阅弹窗
sed -Ezi.bak "s/(Ext.Msg.show\(\{\s+title: gettext\('No valid sub)/void\(\{ \/\/\1/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
# 执行完成后，需注销PVE登录后, 重新启动浏览器
