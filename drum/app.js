

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return ; //stop function to running an other keys
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
    // console.log(key)
    function remClass (){
    key.classList.remove('playing')
    }
    window.addEventListener('keyup', remClass);
})


