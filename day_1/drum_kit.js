window.addEventListener("keydown",function(e){
    const audio=this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;

    audio.play();
});