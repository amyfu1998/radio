$(document).ready(function() {
    TweenMax.to(".card2", 0, {x:1000,ease:Linear.easeNone});
TweenMax.to(".card3", 0, {x: 1000, ease:Linear.easeNone
});
TweenMax.to(".card4", 0, {x: 1000, ease:Linear.easeNone});
TweenMax.to(".progress-bar", 0, {
width: 250,
 ease:Linear.easeNone});
 $('#btn-send').click(function(event) {
    save();
});
});

$('.card1 .btn-next').click(function(event) {
    turnNext(1);
});
$('.card2 .btn-next').click(function(event) {
    turnNext(2);
});
$('.card3 .btn-next').click(function(event) {
    turnNext(3);
});
$('.card4 .btn-prev').click(function(event) {
    turnPrev(4);
});
$('.card3 .btn-prev').click(function(event) {
    turnPrev(3);
});
$('.card2 .btn-prev').click(function(event) {
    turnPrev(2);
});

function turnNext(n){
    TweenMax.to(".progress-bar",0, {
        width: (1000/4)*(n+1)
    });
    TweenMax.to(".card"+n, 0.5, {
        x: -1000
    });
    TweenMax.to(".card"+(n+1), 0.5, {
        x: 0
    });
}
function turnPrev(n){
    TweenMax.to(".progress-bar", 0, {
        width: 250*n, ease:Linear.easeNone
    });
    TweenMax.to(".card"+n, 0.5, {
       x:1000, ease:Linear.easeNone
    });
    TweenMax.to(".card"+(n-1), 0.5, {
        x: 0
    });
}


function save() {
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbys-giNH71HxfqRaWZzILw15yPTbMiI0nPMvzu21CThOT3EVnux/exec";
    parameter.method = "write";
    parameter.q1 = $("input[name='a1']:checked").val();
    parameter.q2 = $("input[name='a2']:checked").val();
    parameter.q3 = $("input[name='a3']:checked").val();
    parameter.q4 = $("input[name='a4']:checked").val();

    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1in204Fjf816g0n77qEGrLTim8FChg4pNYyfAk1z7SIQ/edit#gid=0";
    parameter.sheetTag = "工作表1";
    console.log(parameter);
    $.post(postURL, parameter, function(data) {
        
        if(data.result == "success"){
            alert("寫入成功");
        }else{
            alert(data.msg);
        }
    });
}