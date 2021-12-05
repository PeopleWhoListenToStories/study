> Docker 安装私有gitlab
- [bilibili文档地址](https://www.bilibili.com/read/cv11160098?spm_id_from=333.788.b_636f6d6d656e74.10)
- [bilibili配套视频地址](https://www.bilibili.com/video/BV1iv41177zU)
  
安装gitlab
```js
sudo docker run --detach \
  --hostname humanweaknesses.com \
  --publish 443:443 --publish 80:80 --publish 222:22 \
  --name gitlab \
  --restart always \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```
hostname  域名 或 ip
publish 端口映射
restart 重启方式
gitlab/gitlab-ce:latest  镜像名称

安装gitlab runner
```js
sudo docker run -d --name gitlab-runner --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock 
```

注册gitlab runner 
```js
docker run --rm -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register \
  --non-interactive \
  --executor "docker" \
  --docker-image alpine:latest \
  --url "http://gitlab.mczaiyun.top/" \
  --registration-token "vtizNrFzQKFacsSMxsJX" \
  --description "first-register-runner" \
  --tag-list "test-cicd1,dockercicd1" \
  --run-untagged="true" \
  --locked="false" \
  --access-level="not_protected"
  ```

  使用docker镜像部署项目
  在runner配置文件中配置docker命令 
  ```js
  "/usr/bin/docker:/usr/bin/docker", "/var/run/docker.sock:/var/run/docker.sock" 
  ```

  部署任务
```js
job_deploy: image: docker stage: deploy script: - docker build -t folive . - if [ $(docker ps -aq --filter name=mylive-container) ]; then docker rm -f mylive-container;fi - docker run -d -p 8001:80 --name mylive-container folive - echo 'deploy docker image success. visit http://8.135.98.62:8001' when: manual
```

oss部署项目 
```js
wget http://gosspublic.alicdn.com/ossutil/1.6.18/ossutil64
chmod 755 ossutil64
./ossutil64 config -e ${endPoint} -i ${accessKeyID} -k ${accessKeySecret} -L CH --loglevel debug -c ~/.ossutilconfig
./ossutil64 -c ~/.ossutilconfig cp -r dist oss://fizzz/
```

忘记密码重修设置

1. 登录容器
```shell
docker exec -it gitlab-ce /bin/bash
```

2. 登录GitLab后台服务器，并且切换至git用户
```shell
su - git
```

3. 登录GitLab的Rails控制台
```shell
gitlab-rails console
```
4. 定位到root用户
```shell
user = User.where(id: 1).first
```
5. 修改root密码
```shell
user.password='admin123'
```
6. 保存
```shell
user.save!
```

服务器重启后启动Docker命令
启动步骤：

1、启动Docker 守护进程
      systemctl daemon-reload

2、Docker启动命令：
　　systemctl start docker

3、查看docker服务是否启动
　　ps -ef |grep docker

4、查看docker启动的服务：
     docker ps

其他：
重启docker服务
systemctl restart docker
停止docker服务
systemctl stop docker