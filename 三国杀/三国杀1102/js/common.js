let  CADS =["sha","san","tao","nan","wan"];//杀、闪、桃、南蛮入侵、万箭齐发
let play=[{
    name:'play1',
    blood:3,
    bloodShow:[],
    playCard:[],
    poker:[]
},{
    name:'play2',
    blood:3,
    bloodShow:[],
    playCard:[],
    poker:[]
},{
    name:'play3',
    blood:3,
    bloodShow:[],
    playCard:[],
    poker:[]
},{
    name:'play4',
    blood:3,
    bloodShow:[],
    playCard:[],
    poker:[]
}]
//结束玩家img路径
let imgPlayer = []

//方向,存储动画方向的对象
const DIRECTOR = {
    TOP: {
        idx:0,
        // style:{top:'-140px',left:'166px'}
        style:{top:'-180px',left:'200px'}
    },
    LEFT: {
        idx:1,
        // style:{left:'-500px',top:"60px"}
        style:{left:'-380px',top:"10px"}
    },
    BOTTOM:{
        idx:2,
        // style:{top:"230px",left:"-100px"}
        style:{top:"183px",left:"100px"}
    },
    RIGHT: {
        idx:3,
        style:{left:'465px',top: "200px"}
    }
}

let playNum =0;//进入游戏的开始玩家
let cards = 0;//玩家点击的是什么牌:杀、闪、桃.....
let index ;//玩家点击牌的下标
let playClick = 0;//点击攻击哪方玩家
let isPlay = false ;//是否点击攻击玩家
let isCard = false; //是否已选择要出的牌
let isClick = -1;//是否选择牌
let interVal ;//setInterval