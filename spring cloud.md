#### 创建“服务注册中心”

1. pom添加依赖

2. 配置application.properties

   ```properties
   `spring.application.name=eureka-serverserver.port=1001eureka.instance.hostname=localhosteureka.client.register-with-eureka=falseeureka.client.fetch-registry=false`
   ```

3. 通过`@EnableEurekaServer`注解启动一个服务注册中心提供给其他应用进行对话。这一步非常的简单，只需要在一个普通的Spring Boot应用中添加这个注解就能开启此功能，比如下面的例子：

```java
@EnableEurekaServer
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        new SpringApplicationBuilder(Application.class)
                    .web(true).run(args);
    }
}
```

#### 创建“服务提供方”

1. 添加pom依赖

2. 配置application.properties

   ```properties
   `spring.application.name=eureka-clientserver.port=2001eureka.client.serviceUrl.defaultZone=http://localhost:1001/eureka/`
   ```

3. 应用主类中通过加上`@EnableDiscoveryClient`注解，该注解能激活Eureka中的DiscoveryClient实现，这样才能实现Controller中对服务信息的输出。

   ```java
   `@EnableDiscoveryClient@SpringBootApplicationpublic class Application {    public static void main(String[] args) {        new SpringApplicationBuilder(            ComputeServiceApplication.class)            .web(true).run(args);    }}`
   ```