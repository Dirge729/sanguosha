// 角色选择
// 获取全部角色
//JavaScript
let roleList1 = document.querySelectorAll(".roleAll>ul>li");
// jQuery
let roleList = $(".roleAll>ul>li");
// console.log(roleList);
//console.log(roleList1);
//选择角色
let choices = $(".choices");
let choiced = 0;
//console.log(choices);
for(let i=0;i<roleList.length;i++){
  roleList[i].onclick = function(){ //点击角色
    for(let j= 0; j<roleList.length;j++){
      if(i==j){  
        //选中的角色的class名为check
        roleList[i].className = 'check';
        // 改为相应的角色
        $(".choices>img").attr("src","../images/role/role"+(i+1)+".jpg");
        $(".roleMusic").attr("src","../audio/music"+(i+1)+".mp3");
        $(".roleMusic").volume=10;
        $(".backgroundMusic").volume = 0.1;
        choiced = i;
      }else{
        //未选中的角色的class名为''
        roleList[j].className = '';
      }
    }
  }
}
// 点击选定按钮，进入游戏界面
$(".btn").click(function(){
  window.location.href = "../html/game.html";
  //设置localStorage
  window.localStorage.setItem('currentRole',choiced);
});