$(document).ready(function() {    $('#btn-send').click(function(event) {
    save();
});
});


function save() {
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbys-giNH71HxfqRaWZzILw15yPTbMiI0nPMvzu21CThOT3EVnux/exec";
    parameter.method = "write";
    parameter.userName = $("input[name='userName']").val();
    parameter.contentTxt = $("textarea[name='contentTxt']").val();
    parameter.q5 = $("input[name='a5']:checked").val();
    parameter.q6 = $("input[name='a6']:checked").val();

    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1in204Fjf816g0n77qEGrLTim8FChg4pNYyfAk1z7SIQ/edit?usp=sharing";
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