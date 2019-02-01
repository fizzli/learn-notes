#maven项目中xml文件的位置问题

maven不会自动的把src/main/java 中的xml文件复制到target/classes中。

##例子：

spring和mybatis整合的时候， 如果在 src/main/java路径下配置XXXmaper.xml文件可能导致文件不存在的问题。

文件结构如下：

![文件结构](https://ws1.sinaimg.cn/large/006tNbRwly1fxqew4hbs1j30go0jmmzl.jpg)

配置信息如下：

```xml
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
	<property name="dataSource" ref="dataSource"></property>
	<!-- 自动扫描mapping.xml文件 -->  
	<property name="mapperLocations" value="classpath:/com/javen/mapping/*.xml"></property>
</bean>
```

错误信息如下:

```java
Related cause: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'IUserMapper' defined in file [/eclipse_2/ssm/target/classes/com/javen/mapper/IUserMapper.class]: Cannot resolve reference to bean 'sqlSessionFactory' while setting bean property 'sqlSessionFactory'; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sqlSessionFactory' defined in class path resource [spring-mybatis.xml]: Initialization of bean failed; nested exception is org.springframework.beans.TypeMismatchException: Failed to convert property value of type 'java.lang.String' to required type 'org.springframework.core.io.Resource[]' for property 'mapperLocations'; nested exception is java.lang.IllegalArgumentException: Could not resolve resource location pattern [classpath:/com/javen/mapping/*.xml]: class path resource [com/javen/mapping/] cannot be resolved to URL because it does not exist
```



解决方法一：

在maven中加入如下代码：

```xml
<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>   
```

解决方法二(推荐)：

把xml文件全部都放到src/main/resources 目录下。

![image-20181130213807573](https://ws2.sinaimg.cn/large/006tNbRwly1fxqf30owxuj30c40ag3zf.jpg)