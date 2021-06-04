function setup(){//設定，只做一次
 createCanvas(400,200); 
 textSize(40);//字型大小
}
function draw(){//畫圖，每秒60次
  background(41,199,207);
  let s=second();//秒鐘
  text(s,100,100);
}
//Java和Javascript 無關
//它們像是因為祖先是一樣的，都是C語言。
//C語言是最先發明的，只有這個。
