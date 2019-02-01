# JS函数

定义方式：

1.普通定义：

1. ```javascript
   
   function functionname(params){
       ....
   }
   ```

2. 匿名函数：

   ```js
   //1.匿名函数且立即执行
       (function(xx){
           函数体
       })()
   
   //2.匿名函数赋值给一个变量,即变量也为 函数对象
       var myfun = function(xx){
           ...
       }
   调用：myfun(xxx);
       
   //3.将函数作为对象的方法。
       var test ={
           fun1:function(xx){...}
           fun2:function(xx){...}
       }
   调用：test.fun1();
   
   //4.JavaScript中每个对象都有prototype属性，对对象的prototype属性的解释是：返回对象类型原型的引用。
   var fun = function(xx){....}
   fun.prototype.test = function(xx){....}
   调用：var myfun = new fun();
        myfun.test();                         
   ```





   ### JavaScript实例和对象的区别

   > 在Javascript中只有对象。 变量是对象，函数也是对象。 只要你知道你的对象是什么，按照它的方式去使用就可以了。
   >
   > javascript是弱类型，对象，实例，函数，方法通用的。不需要区别那么清楚。
