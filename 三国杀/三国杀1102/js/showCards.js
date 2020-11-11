// $(function(){
    //初始化牌组
    
    let num=0;//给num初始化值为0，num为牌的值
    for(let j=1;j<5;j++){
        for(let i=0;i<5;i++){
            num=Math.floor(Math.random()*8)+1;//随机生成1-8数字
           if(num==1){//当num为1时，为桃卡牌
            //    play[j-1].poker[i] = '<li class="tao" style="width:70px; height:100px ; "></li>';//给相应角色加入一个li
               play[j-1].poker.push('<li class="tao" style="width:70px; height:100px;"></li>');
               play[j-1].playCard.push(2);//将卡牌num放入playCard中
           }else if(num==2){//当num为2时，为万箭齐发卡牌
            //    play[j-1].poker[i] = '<li class="wan" style="width:70px; height:100px ; "></li>';
               play[j-1].poker.push('<li class="wan" style="width:70px; height:100px;"></li>');
               play[j-1].playCard.push(4);
           }else if(num==3){//当num为3时，为南蛮入侵卡牌
            //    play[j-1].poker[i] = '<li class="nan" style="width:70px; height:100px ; "></li>';
               play[j-1].poker.push('<li class="nan" style="width:70px; height:100px;"></li>');
               play[j-1].playCard.push(3);
           }else if(num==4||num==5||num==6){//当num为4.5.6时，为杀卡牌
            //    play[j-1].poker[i] = '<li class="sha" style="width:70px; height:100px ; "></li>';
               play[j-1].poker.push('<li class="sha" style="width:70px; height:100px;"></li>');
               play[j-1].playCard.push(0);
           }else if(num==7||num==8){//当num为7.8时，为闪卡牌
            //    play[j-1].poker[i] = '<li class="san" style="width:70px; height:100px ; "></li>';
               play[j-1].poker.push('<li class="san" style="width:70px; height:100px;"></li>');
               play[j-1].playCard.push(1);
           }
       }
       let str = '';
       for(let k=0;k<play[j-1].poker.length;k++){
            str += play[j-1].poker[k];
       }
       $(" .cards"+j+" ul").html(str);
      
    }
    
    dealPoker();//将playNum传入，调用dealPoker函数进行当前玩家回合发牌
    updatePoker();//更新牌的位置

    //打印每个玩家的牌值
    for(let i=0;i<4;i++){
        console.log(play[i].playCard);
    }
    
    function dealPoker(){
        let itm=0;
        if(play[playNum].poker.length<6){
            itm=2;
        }else if(play[playNum].poker.length<7){
            itm=1;
        }
        for(let i=0;i<itm;i++){
            num=Math.floor(Math.random()*8)+1;
            // let len = play[playNum].poker.length;//下一玩家牌的张数加2
           if(num==1){
            //    play[playNum].poker[len++] = '<li class="tao" style="width:70px; height:100px; "></li>';
               play[playNum].poker.push('<li class="tao" style="width:70px; height:100px; "></li>');
               play[playNum].playCard.push(2);
           }else if(num==2){
            //    play[playNum].poker[len++] = '<li class="wan" style="width:70px; height:100px;"></li>';
               play[playNum].poker.push('<li class="wan" style="width:70px; height:100px;"></li>');
               play[playNum].playCard.push(4);
           }else if(num==3){
            //    play[playNum].poker[len++] = '<li class="nan" style="width:70px; height:100px;"></li>';
               play[playNum].poker.push('<li class="nan" style="width:70px; height:100px;"></li>');
               play[playNum].playCard.push(3);
           }else if(num==4||num==5||num==6){
            //    play[playNum].poker[len++] = '<li class="sha" style="width:70px; height:100px;"></li>';
               play[playNum].poker.push('<li class="sha" style="width:70px; height:100px;"></li>');
               play[playNum].playCard.push(0);
           }else if(num==7||num==8){
            //    play[playNum].poker[len++] = '<li class="san" style="width:70px; height:100px;"></li>';
               play[playNum].poker.push('<li class="san" style="width:70px; height:100px;"></li>');
               play[playNum].playCard.push(1);
           }
       }
       let str = '';
       for(let k=0;k<play[playNum].poker.length;k++){
            str += play[playNum].poker[k];
       }
        $(".cards"+(playNum+1)+" ul").html(str);
    }
    
    function updatePoker(){
        let len1 = $(".cards1 li");
        let len2 = $(".cards2 li");
        let len3 = $(".cards3 li");
        let len4 = $(".cards4 li")
     
        //牌的布局
        for (let i = 0; i < len1.length; i++) {
            $(".cards1 li").eq(i).css({'position': 'absolute', 'left': i * 50 + 'px'})
        }
        for (let i = 0; i < len2.length; i++) {
            $(".cards2 li").eq(i).css({'position': 'absolute', 'top': i * 50 + 'px'})
        }
        for (let i = 0; i < len3.length; i++) {
            $(".cards3 li").eq(i).css({'position': 'absolute', 'left': i * 50 + 'px'})
        }
        for (let i = 0; i < len4.length; i++) {
            $(".cards4 li").eq(i).css({'position': 'absolute', 'top': i * 50 + 'px'})
        }
    }

// 位置复原
function locations() {
    let len1 = $(".cards1>ul>li");
    let len2 = $(".cards2>ul>li");
    let len3 = $(".cards3>ul>li");
    let len4 = $(".cards4>ul>li")
    for (let i = 0; i < len1.length; i++) {
        $(".cards1>ul>li").eq(i).css({'top': ""})
    }
    for (let i = 0; i < len2.length; i++) {
        $(".cards2>ul>li").eq(i).css({'left': ""})
    }
    for (let i = 0; i < len3.length; i++) {
        $(".cards3>ul>li").eq(i).css({'top': ""})
    }
    for (let i = 0; i < len4.length; i++) {
        $(".cards4>ul>li").eq(i).css({'left': ""})
    }
}

//出牌动画
function outPoker(i,j){
    //状态切换，出牌的动画，通过对象获取动画移动的目标位置
    if(DIRECTOR.TOP.idx ===i){
        $(".cards" + (i + 1) + ">ul li").eq(j).animate(DIRECTOR.TOP.style,300)
    }else if(DIRECTOR.LEFT.idx  ===i){
        $(".cards" + (i + 1) + ">ul li").eq(j).animate(DIRECTOR.LEFT.style,600)
    }else if(DIRECTOR.BOTTOM.idx  ===i){
        $(".cards" + (i + 1) + ">ul li").eq(j).animate(DIRECTOR.BOTTOM.style,900)
    }else if(DIRECTOR.RIGHT.idx  ===i){
        $(".cards" + (i + 1) + ">ul li").eq(j).animate(DIRECTOR.RIGHT.style,1200)
    }

    let time = setTimeout(function () {
        // console.log('j111111',j)
        $(".cards" + (i + 1) + ">ul li").eq(j).remove()
        playStyle();
        updatePoker();
        clearTimeout(time)
    },2000)
}