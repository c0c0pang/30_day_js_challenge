window.addEventListener("keydown", function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);//키보드로 부터 커맨드를 입력받음(아스키코드 값)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;//해당 audio커맨드가 아니라면 아무소리도 안나게 해줌
    audio.currentTime = 0;
    audio.play();//해당하는 커맨드의 소리를 출력해줌
    key.classList.add("playing");//playing의 css code를 가져와 해당 key가 입력되면 적용시킴

});
function playSound (e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

}
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);