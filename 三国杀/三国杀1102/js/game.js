/**
 * common.js引入变量
 *  playNum 当前正在出牌的游戏玩家的序号
 *  play 所有游戏玩家（数组）
 *
 * */
playStyle();
playBlood();
progress();
pokerClick();

//移出特效
function playStyle() {
    $('.boxContainer').hide();//移出火球特效
    for (let i = 1; i <= play.length; i++) {
        $('.person' + i + ' .personShunshang').hide();//移出损伤特效
        $('.person' + i + ' .personShan').hide();//移出闪特效
        $('.person' + i + ' .personSha').hide();//移出杀特效
    }
    //移出绿边框特效
    for (let i = 1; i <= play.length; i++) {
        if (i != (playNum + 1)) {
            $('.person' + i + ' .personContainer').hide();//移出边框特效
        } else {
            $('.person' + i + ' .personContainer').show();//移出边框特效
        }
    }

    //阵亡特效
    for (let i = 1; i <= play.length; i++) {
        $('.person' + i + ' .personContainer2').hide();//移出边框特效
    }

    //移出红边框特效
    for (let i = 1; i <= play.length; i++) {
        if(play[i-1].blood==0){
            $('.person' + i + ' .death').show();//移出边框特效
        }else{
            $('.person' + i + ' .death').hide();//移出边框特效
        }
    }
}


//控制进度条
function progress() {
    console.log("playNum", playNum)
    //隐藏和显示进度条和按钮块
    for (let i = 0; i < play.length; i++) {
        $('.proBnt' + (i + 1)).css("visibility", "hidden")//隐藏所以进度条和按钮
    }
    $('.proBnt' + (playNum + 1)).css('visibility', 'visible')//显示当前玩家进度条和按钮
    //进度条的宽度
    let spanWidth = 100;
    //切换哪个玩家显示进度条的定时器
    interVal = setInterval(() => {
        spanWidth--;
        //这两个判断是判断横着的进度条还是竖着的进度条
        if (playNum == 0 || playNum == 2) {
            $('.progress1Span').css({width: spanWidth + '%'})
        } else if (playNum == 1 || playNum == 3) {
            $('.progress2Span').css({height: spanWidth + '%'})
        }
        //玩家选择攻击对象（当玩家点击的是杀，则出牌前需要选择攻击的对象才能出牌
        //当进度条宽度为0时则代表当前玩家出牌时间结束，切换下一个玩家
        if (spanWidth == 0) {
            //修改当前玩家的序号，当等于4时则代表一轮已经结束，又从第一个玩家重新开始
            // playNum = ++playNum < 4 ? playNum : 0;
            
            over()
            clearInterval(interVal);
            progress();
            console.log("出牌时间截止，自动结束回合，进入下一玩家");
        }
    }, 200)
}

let imgBox = $('.game .person>img')
$.each(imgBox, function (it) {
    $(this).on("click", function () {
        console.log("攻击对象：" + it);
        switch (it) {
            case 0: {
                playClick = 0;
                break;
            }
            case 1: {
                playClick = 1;
                break;
            }
            case 2: {
                playClick = 2;
                break;
            }
            case 3: {
                playClick = 3;
                break;
            }
        }
        if (cards == 0) {
            playStyle();
            // $('.person'+(playClick+1)+' .personSha').show();//杀特效
            $('.person' + (playClick + 1) + ' .personContainer2').show();//红边框特效
        }
        if (play[playClick].blood <= 0) {
            alert("玩家已死亡，请重新选择")

        } else {
            isPlay = true;//已选择攻击对象
        }
    })

})


//按钮事件
let btn = $('.btn > span');//   0 1    2 3   4 5   6 7
console.log("btn:", btn)
$.each(btn, function (btn) {
    //start
    if (btn % 2 == 0) {
        $(this).on("click", function () {
            if (isCard) {
                if (cards == 0 && isPlay == false) {
                    alert("请选择攻击对象！");
                } else {
                    if (cards == 1) {
                        alert("玩家自己不能出闪");
                    } else if (cards == 2 && play[playNum].blood == 3) {
                        alert("玩家血满，无需加血！")
                    } else {
                        play[playNum].playCard.splice(index, 1);//删除打出的牌
                        //li
                        play[playNum].poker.splice(index, 1);
                        //每张牌对应的音效
                        if (cards == 0) {
                            $(".cardMusic").attr("src", "../audio/sha.ogg");
                        } else if (cards == 1) {
                            $(".cardMusic").attr("src", "../audio/shan.ogg");
                        } else if (cards == 2) {
                            $(".cardMusic").attr("src", "../audio/tao.ogg");
                        } else if (cards == 3) {
                            $(".cardMusic").attr("src", "../audio/nanmanruqin.ogg");
                        } else {
                            $(".cardMusic").attr("src", "../audio/wanjianqifa.ogg");
                        }
                        //状态切换，出牌的动画，通过对象获取动画移动的目标位置
                        outPoker(playNum, index);
                        console.log(play[playNum].playCard);
                        if (cards == 4 || cards == 3) {//特效：万箭齐发、南蛮入侵
                            $(".baoZha").attr("src","../audio/baozha.ogg");
                            $('.boxContainer').show();
                        }
                        //是否点击了攻击的人，
                        if (isPlay) {
                            //卡牌和被攻击对象的下标
                            skill(cards, playClick);
                        } else {
                            //没有攻击对象时传入自己的下标
                            skill(cards, playNum);
                        }
                        isCard = false;
                        isPlay = false;
                    }
                }
            }
            clearInterval(interVal)
            progress();
        });
    }
    else {
        //end
       $(this).on('click',over)
    }
})
function over() {
    nextPlay();//下一回合玩家并判断是否结束
    console.log("结束回合，下一回合出牌玩家：" + playNum);
    playStyle();
    dealPoker();
    updatePoker();
    pokerClick();
}
/***
 * 突出显示指定的卡牌
 * @param partObj 当前玩家
 * @param idx 显示卡牌序号
 * @param styles 指定的样式对象
 * @param defaultStyles 默认样式对象
 */
function showCardOne(partObj,idx,styles,defaultStyles) {
    //点击哪张突出哪张牌
    for (let i = 0; i < partObj.length; i++) {
        if (i === idx) {
            partObj.eq(i).css(styles);
        } else {
            partObj.eq(i).css(defaultStyles);
        }

    }
}

/**
 * 获取卡牌类型
 * @param obj 当前卡牌DOM对象
 */
function pokerType(obj){
    index = obj.index();
    isCard = true;//已选择牌
    for (let i = 0; i < CADS.length; i++) {
        //循环遍历判断玩家点击的是什么类型的卡牌【杀、闪、桃、南蛮入侵、万箭齐发】
        if (obj.eq(0).is("."+CADS[i])) {
            cards = i;
            console.log("点击的是玩家" + playNum + "的牌：" + i)
        }
    }
    //边框特效
    if (cards == 3 || cards == 4) {
        for (let i = 0; i < play.length; i++) {
            if (i != playNum && play[i].blood>0) {
                $('.person' + (i + 1) + ' .personContainer2').show();//红边框特效
            }
        }
    }
}
//牌的点击事件--函数封装
function pokerClick() {
    let part1 = $('.play1>.proCards1>.cards1>ul>li')
    let part2 = $('.play2>.proCards2>.cards2>ul>li')
    let part3 = $('.play3>.proCards3>.cards3>ul>li')
    let part4 = $(".play4>.proCards4>.cards4>ul>li")
    //part1部分事件
    $.each(part1, function (idx) {
        part1.eq(idx).bind("click", function () {
            //循环遍历判断玩家点击的是什么类型的卡牌【杀、闪、桃、南蛮入侵、万箭齐发】
            pokerType($(this));
            //点击哪张突出哪张牌
            showCardOne(part1,idx,{'top': 70 + 'px'},{'top':""});
        })
    })
    $.each(part2, function (idx) {
        part2.eq(idx).bind("click", function () {
            pokerType($(this));
            //点击哪张突出哪张牌
            showCardOne(part2,idx,{'left': -10 + 'px'},{"left":""});
        })
    })

    $.each(part3, function (idx) {
        part3.eq(idx).bind("click", function () {
            pokerType($(this));
            showCardOne(part3,idx,{'top': -10 + 'px'},{"top":""});
        })
    })

    $.each(part4, function (idx) {
        part4.eq(idx).bind("click", function () {
            pokerType($(this));
            showCardOne(part4,idx,{'left': 35 + 'px'},{"left":""});
        })
    })
}

//进入下一玩家，并判断游戏是否结束
function nextPlay() {
    let temp = playNum;
    while (temp >= 0 && temp < 4) {
        temp = ++temp < 4 ? temp : 0;
        if (play[temp].blood > 0) {
            break;
        }
    }
    if (playNum == temp) {
        // alert("游戏结束！玩家" + (temp + 1) + "胜利");
        // $('.proBnt' + (temp + 1)).css("visibility", "hidden")//隐藏所以进度条和按钮
        $('.proBnt' + (temp + 1))[0].style.display = 'none'
        clearInterval(interVal);
        showImg()
    } else {
        playNum = temp;
        clearInterval(interVal);
        progress();
    }
}

//判断血量减1后游戏是否结束
function nextBlood() {
    let temp = playNum;
    while (temp >= 0 && temp < 4) {
        temp = ++temp < 4 ? temp : 0;
        if (play[temp].blood > 0) {
            break;
        }
    }
    if (playNum == temp) {
        console.log('over1',playNum)
        // alert("游戏结束！玩家" + (temp + 1) + "胜利");
        // $('.proBnt' + (temp + 1)).css("visibility", "hidden")//隐藏所以进度条和按钮
        $('.proBnt' + (temp + 1))[0].style.display = 'none'
        clearInterval(interVal);
        showImg()
    } else {
        console.log('over2',playNum)
        clearInterval(interVal);
        progress();
    }
}
// showImg()
function showImg() {
    // overBox
    let over = $('.over')[0]
    over.style.display = "block"
    console.log('112222',imgPlayer)
    let overImgArray = $(".overGame img")
    let overImgSpan = $(".overGame span")
    for(let i = 0; i < overImgArray.length; i++) {
        overImgArray.eq(i).attr("src",imgPlayer[i])
        console.log(overImgArray.eq(i))
        if(play[i].blood === 0) {
            overImgSpan.eq(i).text('阵亡')
        } else {
            overImgSpan.eq(i).text('胜利')
        }
    }
}








