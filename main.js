let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let chances = 5
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let history = []
let gameOver = false


playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100+1)
    console.log("정답은 이거야",computerNum)
}
pickRandomNum();

function play(){
    
    let userValue=userInput.value
    if(userValue>100 || userValue<1){
        resultArea.textContent="1~100사이 숫자를 입력하시오!"
        return;
        }
    if(history.includes(userValue)){resultArea.textContent="이미 입력한 숫자입니다! 다른 숫자를 입력해주세요."
    return;}

    chances -- ;
    chanceArea.textContent=`남은기회는 ${chances}번 화이팅!!`
    if(userValue>computerNum){
        resultArea.textContent = "그것보다 낮아!!"
    }else if(userValue<computerNum){
        resultArea.textContent = "그것보다 높아!!"
    }else {
        resultArea.textContent= "너는 천재야!!"
    }
    console.log(userValue)

    history.push(userValue)
    console.log(history)

    if(chances<1){gameOver=true}

    if(gameOver==true){
        resultArea.textContent="넌 천재가 아닌거 같아..."
        playButton.disabled=true}
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    chances=5
    resultArea.textContent="좋아 다시 시도할 기회를 줄게"
    chanceArea.textContent="남은 기회는 5번"
    history=[]
    gameOver=false
    playButton.disabled=false
}