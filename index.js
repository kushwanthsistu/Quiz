var el = document.getElementById('menu') ;
var can = document.getElementById('cancel') ;
var ins = document.getElementById('inst') ;
var canin =document.getElementById('cancel_inst') ;
 
var second = 30 ;
var minutes = 1 ;
var secdis = document.getElementById('seconds') ;
var mindis = document.getElementById('minutes') ;
var start = document.getElementById('start') ;
var end = document.getElementById('end') ;
var sele = document.getElementById('subjectselect') ;
var selected_stream = document.getElementById('test_case') ;
var chosen ;
var going ;
var chosensubject = document.getElementById('chosensubject') ;
var c ="none"; 
var currentlydisplaying = document.getElementById('subjectchoosing') ;
var questionstream ;
var i = 0 ;
var activearticle ;
var activelist ;
var activesystem ;
var currentquestion ;
var j = 0 ;
var score = 0 ;
var scorecard = document.getElementById('score') ;
scorecard.textContent = score ;
var endbutton = document.getElementById('toend') ;

function endingtime() {
    var c = document.getElementById('ultimatemessageto') ;
    c.setAttribute('id','ultimatemessage') ;
    var d = document.getElementById('reason') ;
    d.textContent = 'Out of Time!' ;
    var e = document.getElementById('totalscore') ;
    e.textContent = score ;
}

function subject() {
    var a = document.getElementById('subjects') ;
    a.setAttribute('id','subjectappear') ;
}
function cancel() {
    
    var a = document.getElementById('subjectappear') ;
    a.setAttribute('id','subjects') ;
}
function instruction() {
    var a = document.getElementById('instructions') ;
    a.setAttribute('id','instruction_appear') ;
}
function canceli() {
    var a = document.getElementById('instruction_appear') ;
    a.setAttribute('id','instructions') ;
}
function started() {
    function timer() {
    if(second == 0) {
        second = 59 ;
        minutes = minutes-1 ;
    }
    else {
        second = second-1 ;
    }
    if(second < 10 )
    secdis.textContent = '0'+second ;
    else 
    secdis.textContent = second ;
    if(minutes < 10)
    mindis.textContent = '0'+minutes ;
    else 
    mindis.textContent = minutes ;
    if(second == 0 && minutes == 0) {
        clearInterval(time) ; 
    endingtime() ;
    }
}
    if(c == 'none') {
            var z = document.getElementById('error') ;
            z.textContent = ' * please select any of the fields * ' ;
    }
    else {
    var z = document.getElementById('error') ;
    z.setAttribute('id','noerror') ;
    start.setAttribute('id','started') ;
    var a = document.getElementById('toend') ;
    a.setAttribute('id','end') ;
    var time = setInterval(timer,1000) ;
    var information = document.getElementById('beforeinformation') ;
    information.setAttribute('id','information') ;
    going.setAttribute('id',c) ;
    currentlydisplaying.setAttribute('id','subjectchosen') ;
    if(c == 'arithmetic') {
        questionstream = document.querySelectorAll('#arithmetic article') ;
        
    }
    if(c == 'sciences') {
        questionstream = document.querySelectorAll('#sciences article') ;
        
    }
    if(c == 'english') {
        questionstream = document.querySelectorAll('#english article') ;
        
    }
    if(c == 'generalknowledge') {
        questionstream = document.querySelectorAll('#generalknowledge article') ;

    }
    currentquestion = questionstream[0] ;
    currentquestion.setAttribute('id','madevisible') ;
    var activelist = document.querySelectorAll('#madevisible ul') ;
    activesystem = document.querySelectorAll('#madevisible ul li') ;
    activelist[0].addEventListener('click',activation,false) ;
    
    }
}
function stream(e) {
   var z = e.target ;
   selected_stream.removeAttribute('id') ;
   z.setAttribute('id','target') ;
   chosen = z.value ;
   if(chosen == 1) {
       c = "arithmetic" ;
       going = document.getElementById('goarithmetic') ;
       chosensubject.textContent = 'Arithmetic' ;
       
   }
   else if(chosen == 2) {
       c = "sciences" ;
       going = document.getElementById('gosciences') ;
       chosensubject.textContent = "Sciences" ;
   }
   else if(chosen == 3) {
       c = "english" ;
       going = document.getElementById('goenglish') ;
       chosensubject.textContent = "English Vocabulary" ;
   }
   else if(chosen == 4) {
       c = "generalknowledge" ;
       going = document.getElementById('gogeneralknowledge') ;
       chosensubject.textContent = "General Knowledge" ;
   }
   selected_stream = z ;
}
function timedelay() {
    currentquestion.removeAttribute('id') ;
        currentquestion = questionstream[i] ;
        currentquestion.setAttribute('id','madevisible') ;
        activelist = document.querySelectorAll('#madevisible ul') ;
        activesystem = document.querySelectorAll('#madevisible ul li') ;
        activelist[0].addEventListener('click',activation,false) ;
}
function activation(e) {
    var f = e.target ;
    i = i + 1 ;
    if(f.value == 1 || f.value == 2 || f.value == 3 || f.value == 4) {
    if(f.value == 3) {
        f.setAttribute('id','correct') ;
        score = score + 100 ;
        scorecard.textContent = score ;
        setTimeout(timedelay,1000) ;
    }
    else {
        f.setAttribute('id','incorrect') ;
        score = score - 50 ;
        scorecard.textContent = score ;
        for(j = 0;j < 4;j++) {
            if(activesystem[j].value == 3) {
                activesystem[j].setAttribute('id','correct') ;
            }
        }
        setTimeout(timedelay,1500) ;
    }}
}
function ending() {
    var c = document.getElementById('ultimatemessageto') ;
    c.setAttribute('id','ultimatemessage') ;
    var d = document.getElementById('reason') ;
    d.textContent = 'Good Try!' ;
    var e = document.getElementById('totalscore') ;
    e.textContent = score ;
}

el.addEventListener('click',subject,false) ;
can.addEventListener('click',cancel,false) ;
ins.addEventListener('click',instruction,false) ;
canin.addEventListener('click',canceli,false) ;
start.addEventListener('click',started,false) ;
sele.addEventListener('click',stream,false) ;
endbutton.addEventListener('click',ending,false) ;
