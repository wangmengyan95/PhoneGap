$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
})

function onDeviceReady() {
    alert("ready");
    // $("#captureAudio").click(function(){
    //     alert("start");
    //     captureAudio();
    //     alert("end");
    // })
    $("#record").bind("mousedown", function(){
        var date=new Date();
        var path=date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".wav";
        var mediaRecord=new Media(path,playSuccess,playError);
        mediaRecord.startRecord();
    });
    $("#record").bind("mouseup", function(){
        mediaRecord.stopRecord();
        alert("finish");
    })
}

function captureAudio(){
    navigator.device.capture.captureAudio(captureSuccess,captureError,{});
}

function captureSuccess(mediaFiles){
    for(i=0;i<=mediaFiles.length-1;i++){
        var path=mediaFiles[i].fullPath;
        alert(path);
        playRecord(path);
    }
}

function captureError(error){
    alert(error.code);
}

function playRecord(path){
    alert("play");
    var media=new Media(path,playSuccess,playError);
    media.seekTo(0);
    media.play();
}

function playSuccess(){
    console.log("success");
}

function playError(){
    console.log("error");
}
}