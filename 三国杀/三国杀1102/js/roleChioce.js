//获取当前选定的角色
let currentRole = (window.localStorage.getItem('currentRole'))*1;
console.log('currentRole',currentRole);
console.log(typeof(currentRole));
//获取玩家
let roleList = $(".personBox");
console.log('personBox',roleList);
//选定的角色为玩家1
$(".p1").attr("src","../images/game/role"+(currentRole+1)+".jpg");
imgPlayer.push("../images/game/role"+(currentRole+1)+".jpg")
//其余玩家随机角色
//玩家2的随机数
let p2Random =Math.floor( Math.random()*9) +1;
console.log('p2Random',p2Random);
//玩家3的随机数
let p3Random =Math.floor( Math.random()*9) +1;
console.log('p3Random',p3Random);
//玩家4的随机数
let p4Random =Math.floor( Math.random()*9) +1;
console.log('p4Random',p4Random);
while(1){
  //判断玩家2是否跟玩家1的角色相同
  if(p2Random != (currentRole+1)){
    //角色不相同，则玩家2就为随机数对应的角色
    $(".p2").attr("src","../images/game/role"+p2Random+".jpg");
    imgPlayer.push("../images/game/role"+p2Random+".jpg")
    //判断玩家3是否与玩家2和玩家1的角色相同
    if(p3Random != p2Random && p3Random!=(currentRole+1)){
      //角色不相同，则玩家3就为随机数对应的角色
      $(".p3").attr("src","../images/game/role"+p3Random+".jpg");
      imgPlayer.push("../images/game/role"+p3Random+".jpg")
      //判断玩家4是否与玩家3、玩家2和玩家1的角色相同
      if(p4Random!=p3Random && p4Random!=p2Random && p4Random!=(currentRole+1)){
        //角色不相同，则玩家4就为随机数对应的角色
        $(".p4").attr("src","../images/game/role"+p4Random+".jpg");

        imgPlayer.push("../images/game/role"+p4Random+".jpg")
        break;
      }else{
        // 角色相同，重新产生随机数
        p4Random =Math.floor( Math.random()*9) +1;
      }
    }else{
      // 角色相同，重新产生随机数
      p3Random =Math.floor( Math.random()*9) +1;
    }
  }else{
    // 角色相同，重新产生随机数
    p2Random =Math.floor( Math.random()*9) +1;
  }
}

