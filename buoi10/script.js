const MAX_TIME = 4;
let time=MAX_TIME;
let interval = null;
function handleTime(){
    let timerElement= document.getElementById('timer');
    timerElement.innerHTML = time
    let interval = setInterval(() =>{
        if(time===0){
            clearInterval(interval)
            confirm("hết giờ")    
            return
        }
        time--;
        timerEleament.innerHTML = time
    },1000)
}
$(document).ready(function(){
    handleTime()

    $('#submit-btn-id').on('click',(event) =>{
        event.preventDefault()
        $('.wrong-anwsers').slideUp('fast');
        $('.correct-anwsers').css('color','red')
        $('.correct-anwsers').append('<div class="ex-correct-anwsers"><b>Đáp án đúng:...</b></div>')
    })
    $('#submit-btn-id').on('click',(event) => {
      event.preventDefault();
      $('.wrong-anwsers').slideUp('fast');
      $('.correct-anwsers').css('color', 'red');
      const existingAnswer = $('.correct-anwsers').find('.ex-correct-anwsers');
      if (!existingAnswer.length) {
        $('.correct-anwsers').append('<div class="ex-correct-anwsers"><b>Đáp án đúng:...</b></div>');
      }
    });
    $('#reset-btn-id').on('click',(event) =>{
        event.preventDefault()
        time= MAX_TIME
        clearInterval(interval)
        handleTime()
        $('.wrong-anwsers').slideDown('fast');
        $('.correct-anwsers').css('color','black')
        $('.ex-correct-anwsers').empty();
    })
});
