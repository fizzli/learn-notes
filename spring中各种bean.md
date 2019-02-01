spring中各种bean

```xml
<!--初始化spring容器-->
<listener>
	<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>

<!--
servlet工程初始化步骤：
1.服务器为每个工程创建一个对象，就是ServletContext域对象，全局唯一，工程内所有servlet都共享这个对象。
2.Web容器在ServletContext实例之后创建ServletContextEvent的实例。
-->

<!--
原理：
1.ContextLoaderListener实现ServletContextListener接口。
2.ServletContextListener监听ServletContext对象的生命周期，因为每个web应用仅有一个 ServletContext对象，故实际上是监听整个web应用。
3.实现了ServletContextListener接口的类在web.xml中配置为监听后，当web应用启动后，会触发ServletContextEvent事件，调用实现的contextInitialized(ServletContextEvent sce)方法。
4.ContextLoaderListener通过ContextLoader对象初始化Spring容器。在contextInitialized方法中调用contextLoader.initWebApplicationContext(event.getServletContext())。
5.ContextLoader类中的initWebApplicationContext方法返回一个WebApplicationContext对象。并通过servletContext.setAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE, this.WebApplicationContext)方法将WebApplicationContext对象放置在ServletContext对象中
-->
```



