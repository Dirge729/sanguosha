// 登录界面
//获取自动登录多选框
$(".formAutoCheckBox").click(function(){
  // 判断多选框是否选中
  if($(".formAutoCheckBox").hasClass("checked")){
    // 如果选中，单击一下则取消选中
    $(".formAutoCheckBox").removeClass("checked");
  }else{
    // 如果未被选中，单击一下则选中
    $(".formAutoCheckBox").addClass("checked");
  }
});
// 获取已阅读并同意多选框
$(".formAgreenCheck").click(function(){
  // 判断多选框是否选中
  if($(".formAgreenCheck").hasClass("checked")){
    // 如果选中，单击一下则取消选中
    $(".formAgreenCheck").removeClass("checked");
  }else{
    // 如果未被选中，单击一下则选中
    $(".formAgreenCheck").addClass("checked");
  }
  // $(".formAgreenCheck").attr("class","formAgreenCheck checked");
});
//用户数组
let user = [
  {id:'123456789',password:'123456'},
  {id:'888888888',password:'123456'},
  {id:'999999999',password:'123456'},
  {id:'166666666',password:'123456'},
  {id:'777777777',password:'123456'},
  {id:'111111111',password:'123456'},
  {id:'156252215',password:'123456'},
  {id:'120541662',password:'123456'},
  {id:'125861512',password:'123456'},
  {id:'158925482',password:'123456'},
  {id:'155284222',password:'123456'},
  {id:'156220816',password:'123456'},
];
console.log('user',user);

//获取登录游戏按钮
$(".formBtn").click(function(){
  //判断账号是否为空
  if($('.tell').val()==''){
    $('.errorId').hide();
    $('.errorPassword').hide();
    // 账号为空，则显示提示内容
    $(".noId").show();
    //账号不为空，判断密码是否为空
  }else if($('.password').val()==''){
    //密码为空，则显示提示内容
    $(".noId").hide();
    $('.errorId').hide();
    $('.errorPassword').hide();
    $(".noPassword").show();
  }else{//账号密码都不空
    $(".noId").hide();
    $(".noPassword").hide();
    $('.errorId').hide();
    $('.errorPassword').hide();
     // 判断点击登录游戏按钮，已阅读并同意多选框是否选中，选中则不弹出提示
    if($(".formAgreenCheck").hasClass("checked")){
      // 已阅读并同意多选框被选中，并隐藏提示内容
      $(".noAgreen").hide();
      // 获取账号输入框中的值
      let id = $('.tell').val();
      console.log('id',id);
      console.log(typeof(id));
      // 获取密码输入框中的值
      let password = $('.password').val();
      console.log('password',password);
      for(let i=0;i<user.length;i++){
        // 判断输入的账号是否与数组中的账号相等
        if(id*1 == user[i].id*1 ){
          $('.errorId').hide();
          // 账号相等，判断密码是否相等
          if(password*1 == user[i].password*1){ 
            $('.errorId').hide();
            $('.errorPassword').hide();
            // 相等跳转至加载页面
            window.location.href = "../html/loading.html";
            break;
          }else{
            // 密码错误，提示框显示
            // console.log('密码错误')
            $('.errorId').hide();
            $('.errorPassword').show();
            break;
          }
        }else{
          // 账号错误
          // console.log('账号错误')
          $('.errorId').show();
          
        }
    }
    }else{
    $('.errorId').hide();
    $('.errorPassword').hide();
      // 未选中，则提示显示
    $(".noAgreen").show();
    }
  }

})
