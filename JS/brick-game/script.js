const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let interval;
const height = canvas.height;
const width = canvas.width;
let x = width / 2;
let y = height - 30;
let dx = 2;
let dy = -2;
let ballColor = "#0095DD";
let cubukUzunlugu = 150;
let cubukYuksekligi = 10;
let cubukX = (width - cubukGenisligi) / 2;
let cubukY = (height - cubukYuksekligi);

//arrow function

const oyunuCiz = () => {
    tahtayiTemizle();
    topuCiz();
    cubukCiz();


}

const tahtayiTemizle = () => {
    ctx.clearRect(0, 0, width, height);
}

const topuCiz = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD"
    ctx.fill();
    ctx.closePath();
}

const topunKonumunuDegistir = () => {
    if (x + dx > width - 10 || x + dx < 10) {
        dx = -dx;
    }

    if(y+dy<10){
        dy=-dy;
    }else if(y+dy>height-(cubukYuksekligi+10)==cubukX){
dy=-dy;
    }

   

    x += dx;
    y += dy;
}

const cubukCiz = () => {
    ctx.beginPath();
    ctx.rect(cubukX,cubukY,cubukGenisligi,cubukYuksekligi);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

const oyunuBaslat = () => {
    if (oyunBasladiMi === false) {
        interval = setInterval(oyunuCiz, 10);
        oyunBasladiMi = true;
    }
    else {
        clearInterval(interval);
        oyunBasladiMi = false;

        ctx.fillStyle = "black";
        ctx.font = "20px Verdana";
        ctx.fillText = ('Oyun Duraklatıldı', width / 2 - 60, height / 2)
    }

}
