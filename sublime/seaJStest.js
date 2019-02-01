define(function(require, exports, module) {
  var ab = require('jquery');

  //toggle() 切换元素的可见状态
  // exports.sayHello = function() {
  //   ab('#hello').toggle('slow');
  // };


  	//初始化----函数的定义方法一
  	init = function(){

  		sayHello();
  		sayHi();
  		showModuleId();
  	};

  	//初始化----函数的定义方法二
  	// var one = {
  	// 	init : function(){
	  // 		sayHello();
	  // 		sayHi();
	  // 		showModuleId();
  	// 	}
  	// };

  	sayHello  = function(){
  		ab('#hello').toggle('slow')
  	};

  	//函数的定义方法
   function sayHi(){
  		ab('#wish').toggle(1000);
  	};

  	showModuleId = function(){
  		ab('#moduleId').html(module.id);
  		//ab('#moduleId').toggle();
  	};


  exports.init = init;

  //exports.init = one.init;



 

}); 

/*

es6新特性:

let 
const

解构赋值
*/