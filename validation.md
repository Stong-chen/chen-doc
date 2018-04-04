# validation使用文档
___

* ## 插件官网
> [https://jqueryvalidation.org/documentation/](https://jqueryvalidation.org/documentation/)

* ## 比较好的中文参考网站
> [http://www.runoob.com/jquery/jquery-plugin-validate.html](http://www.runoob.com/jquery/jquery-plugin-validate.html)

* ## github地址
> [https://github.com/jquery-validation/jquery-validation](https://github.com/jquery-validation/jquery-validation)

* ## 使用时需要导入的文件
```html
<!-- 这是插件最基础 -->
<script type="text/javascript" src="/Public/lib/jquery.validation/1.14.0/jquery.validate.js"></script>
<!-- 这是扩展的验证方法 -->
<script type="text/javascript" src="/Public/lib/jquery.validation/1.14.0/validate-methods.js"></script>
<!-- 这是中文错误提示方法 -->
<script type="text/javascript" src="/Public/lib/jquery.validation/1.14.0/messages_zh.js"></script>
```

* ## 使用代码解释
```
	//js使用插件
	$('#login').validate({
        rules:{	//配置规则
            username:{
                required:true,	//不能为空
                minlength:2,
                maxlength:16
            },
            password:{
                required:true,	
            }
        },
        messages:{	//提示信息
        	username:{
        		required:'请输入用户名'
        	},
        	password:{
        		required:'请输入密码'
        	}
        },
        onkeyup:false,	//在 keyup 时验证
        focusCleanup:false,		//获得交单时就把错误等信息消除了
        errorPlacement:function(error, element){	//错误信息提醒的位置
        	element.parent().before(error);
			//把li标签用红色框框框起来
        	element.parent().css('border','2px ridge rgba(255, 0, 0, 0.74)');
        },
        errorElement:'li',	//错误标签
        errorClass:'error_li',	//错误class
        success:function(label,element){	//通过验证的时候 element是成功的那个元素
      		//把红色的框框删除了
        	$(element).parent().attr('style','');
        },
        submitHandler:function(form){   //提交事件
           // form.submit();
            //进行ajax传值
            alert('提交');
            return ;
			//在这里可以使用ajax提交表单了
    });
```
下面这个css可以不参考。我只是为了
```css
	/*validate的错误提示*/
	form>ul>li.error_li{
	    border: 0;
	    margin-bottom:0px;
	    background:#f2f2f2;
	    color: red;
	    text-align: left;
	}
```

* ## 添加验证规则并且使用
```
	// 判断整数value是否等于0 
	jQuery.validator.addMethod("isIntEqZero", function(value, element, param) { 
	     value=parseInt(value);      
	     return this.optional(element) || value==0;       
	}, "整数必须为0");
//jQuery.validator.addMethod('规则的名字',规则的方法(元素的值,验证的dom元素,使用这个元素传过来的额参数));
```