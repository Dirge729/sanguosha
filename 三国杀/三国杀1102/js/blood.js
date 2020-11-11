
//显示玩家血量
function  playBlood() {
  let qun = '';
  let shu = '';
  let wei = '';
  let wu = '';
  for(let j=0;j<play[0].blood;j++){
    play[0].bloodShow.push('<li><img src="../images/game/qun-magatama-r.png" alt=""></li>')
    qun += play[0].bloodShow[j];    
  }
  for(let j=0;j<play[1].blood;j++){
    play[1].bloodShow.push('<li><img src="../images/game/shu-magatama-r.png" alt=""></li>')
    shu += play[1].bloodShow[j];
  }
  for(let j=0;j<play[2].blood;j++){
    play[2].bloodShow.push('<li><img src="../images/game/wei-magatama-r.png" alt=""></li>')
    wei += play[2].bloodShow[j];
  }
  for(let j=0;j<play[3].blood;j++){
    play[3].bloodShow.push('<li><img src="../images/game/wu-magatama-r.png" alt=""></li>')
    wu += play[3].bloodShow[j];
  }
  console.log(qun);
  $('.person1 ul').html(qun);
  $('.person2 ul').html(shu);
  $('.person3 ul').html(wei);
  $('.person4 ul').html(wu);
}

// //使用桃后，添加玩家血量
// function addBlood(play){
//   switch(play){
//     case 0: {
//       play[0].bloodShow.push('<li><img src="../images/game/qun-magatama-r.png" alt=""></li>');
//       break;
//     }
//     case 1: {
//       play[1].bloodShow.push('<li><img src="../images/game/shu-magatama-r.png" alt=""></li>');
//       break;
//     }
//     case 2: {
//       play[2].bloodShow.push('<li><img src="../images/game/wei-magatama-r.png" alt=""></li>');
//       break;
//     }
//     case 3: {
//       play[3].bloodShow.push('<li><img src="../images/game/wu-magatama-r.png" alt=""></li>');
//       break;
//     }
//   }
// }