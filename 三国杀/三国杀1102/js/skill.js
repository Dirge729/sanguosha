
// 卡牌：
// 0：杀
// 1：闪
// 2：桃
// 3：南蛮入侵
// 4：万箭齐发

function skill (cardIndex, playIndex){
  //cardIndex：牌 ,playIndex:玩家(桃、南蛮入侵、万箭齐发：playIndex表示玩家自己，，，其余表示对方玩家)
  console.log("cardIndex:",cardIndex," playIndex:",playIndex)
  switch(cardIndex){
    case 0: {//杀->闪
      avoid(cardIndex,playIndex);
      break;
    }
    case 2: {
      addBlood(playIndex);//桃
      break;
    }
    case 3: {
      kill(playIndex);//南蛮入侵->全出杀
      break;
    }
    case 4: {
      console.log('万箭齐发',cardIndex)
      avoid(cardIndex, playIndex);//万箭齐发->全出闪
      break;
    }
  }
}

//判断牌堆是否有“杀”
function kill(playIndex) {
  let role = $('.lote');
  for(let i=0;i<play.length;i++){
    if(i!=playIndex && play[i].blood>0){//除了自己和血量为0玩家，集体出杀，无杀血量-1
      let j=0;
      for(j;j<play[i].playCard.length;j++){
        if(play[i].playCard[j] == 0) {//有“杀”出“杀”
          // $(".autoCards").attr("src","../audio/sha.ogg");
          $('.person'+(i+1)+' .personSha').show();//杀特效
          play[i].playCard.splice(j,1);//删除打出的牌
          play[i].poker.splice(j, 1);
          outPoker(i,j);
          console.log("攻击后的玩家牌"+play[i].playCard);
          break;
        }
      }
      if(j == play[i].playCard.length){
        play[i].blood--;//无“杀”血量减1
        $('.person'+(i+1)+' .personShunshang').show();//损伤特效
        play[i].bloodShow.splice(0,1);//删除一滴血
        $(".autoCards").attr("src","../audio/shaTX.ogg");
        if(play[i].blood <= 0){
          //玩家死亡
          play[i].playCard = [];
          play[i].poker = [];
          $(" .cards"+(i+1)+" ul").html('');
          console.log("玩家死亡：清空牌："+play[i].poker);
          $(".cardMusic").attr("src","../audio/over.ogg");
        } 
        console.log("无杀血-1:"+play[i].blood);
      }     
    }
  }
  playBlood();//刷新血
  updatePoker();//更新牌
  nextBlood();
}

//判断牌堆是否有“闪”
function avoid(cardIndex ,playIndex) {
  console.log("avoid",cardIndex,"->",playIndex)
  if(cardIndex == 0){//对方出杀
    // console.log("play[playIndex].playCard.length"+play[playIndex].playCard.length);
    let i=0;
    for(i;i<play[playIndex].playCard.length;i++){
      if(play[playIndex].playCard[i] == 1) {//有“闪”出“闪”
        $('.person'+(playIndex+1)+' .personShan').show();//闪特效
        console.log("有闪出闪");
				// $(".autoCards").attr("src","../audio/shan.ogg");
        play[playIndex].playCard.splice(i,1);
        play[playIndex].poker.splice(i, 1);
        outPoker(playIndex,i);
        console.log("攻击后的玩家牌"+play[playIndex].playCard);
        // $(".cards"+(playIndex+1)+">ul li").eq(i).remove();
        
        break;
      }
    }
    if(i == play[playIndex].playCard.length){
      play[playIndex].blood--;//无“闪”血量减1
      $('.person'+(playIndex+1)+' .personShunshang').show();//损伤特效
      play[playIndex].bloodShow.splice(0,1);//删除一滴血
      $(".autoCards").attr("src","../audio/shaTX.ogg");
      if(play[playIndex].blood <= 0){
        //玩家死亡
        alert("玩家"+(playIndex+1)+"死亡")
        setTimeout(function () {
          play[playIndex].playCard = [];
          play[playIndex].poker = [];
          $(" .cards"+(playIndex+1)+" ul").html('');
        },2000)
        $(".cardMusic").attr("src","../audio/over.ogg");
        console.log("玩家死亡：清空牌："+play[playIndex].poker);
      } 
      console.log("无闪血-1:"+play[playIndex].blood);
      // updatePoker();//更新牌
      // nextBlood();
    }
    playBlood();//刷新血
    updatePoker();//更新牌
    nextBlood();
  }else if(cardIndex == 4){//我出万箭齐发
    for(let i=0;i<play.length;i++){
      if(i!=playIndex && play[i].blood>0){//除了自己和血量为0玩家，集体出杀，无杀血量-1
        let j=0;
        for(j;j<play[i].playCard.length;j++){
          if(play[i].playCard[j] == 1) {//有“闪”出“闪”
            $('.person'+(i+1)+' .personShan').show();//闪特效
            console.log("有闪出闪");
            // $(".autoCards").attr("src","../audio/shan.ogg");
            play[i].playCard.splice(j,1)
            play[i].poker.splice(j, 1);
            outPoker(i,j);
            console.log("攻击后的玩家牌"+play[i].playCard);
            break;
          }
        }
        if(j == play[i].playCard.length){
          play[i].blood--;//无“杀”血量减1
          $('.person'+(i+1)+' .personShunshang').show();//损伤特效
          play[i].bloodShow.splice(0,1);//删除一滴血
          // outPoker(i,j);
          $(".autoCards").attr("src","../audio/shaTX.ogg");
          if(play[i].blood <= 0){
            //玩家死亡
            alert("玩家"+(i+1)+"死亡")
            //玩家死亡，牌清空
            // for(let n=0;n<play[i].playCard.length;n++){
            //   play[i].playCard.splice(0,1);// 
            //   play[i].poker.splice(0,1);// 
            // }
            play[i].playCard = [];
            play[i].poker = [];
            $(" .cards"+(i+1)+" ul").html('');
            $(".cardMusic").attr("src","../audio/over.ogg");
            console.log("玩家死亡：清空牌："+play[i].poker);
          } 
          console.log("无闪血-1:"+play[i].blood);
          // updatePoker();//更新牌
          // nextBlood();
        }
        
      }
    }
    playBlood();//刷新血
    updatePoker();//更新牌
    nextBlood();
  }
}

//桃：给自己加血
function addBlood(playIndex) {
  play[playIndex].blood++;
  console.log("玩家"+(playIndex+1)+":血量+1："+play[playIndex].blood);
  playBlood();
  updatePoker();//更新牌
  clearInterval(interVal)
  progress();
}
