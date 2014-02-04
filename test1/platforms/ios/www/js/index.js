$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
})

function onDeviceReady() {
    alert("ready");
    $("#captureAudio").click(function(){
        alert("start");
        captureAudio();
        alert("end");
    })
}

function captureAudio(){
    navigator.device.capture.captureAudio(captureSuccess,captureError,{});
}

function captureSuccess(mediaFiles){
    for(i=0;i<=mediaFiles.length-1;i++){
        var path=mediaFiles[i].fullPath;
        playRecord(path);
    }
}

function captureError(error){
    alert(error.code);
}

function playRecord(path){
    alert("play");
    if(media==null){
        media=new Media(path);
    }
    media.seekTo(0);
    media.play();
}