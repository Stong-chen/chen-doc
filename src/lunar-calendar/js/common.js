$(function(){
     //表单验证
    function biTian() {
        var $name=$("#name").val();
        var $phone=$("#phone").val();
        var $birth=$('#birth').val();
        var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if($name==""){
            alert("请输入您的姓名！");
            return false;
        }
        if($birth==""){
            alert("请输入您的生日！");
            return false;
        }
        if($phone!==""&&!reg.test($phone)) {
            alert("请输入正确的电话格式！");
            return false;
        }
    }
    $('#submit').on('click',function(){
        biTian();
        return false;

    })
    //底部下载点击关闭
    $('.ui-notice-close').on('click',function(){
            $('.ui-notice').hide();
    })
})
