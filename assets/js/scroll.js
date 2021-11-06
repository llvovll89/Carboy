let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 350; // 이미지 사이즈 만큼 이동한다

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function next(){
    if(curPos < 4){
        prevBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    }
}

function prev(){
    if(curPos > 0){ 
        prevBtn.removeAttribute('disabled')
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    }
}

function init(){
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

}

init();
