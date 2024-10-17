var stime =0
var etime = 0
var timeint 
var start = document.getElementById("start")
var pause = document.getElementById("pause")
var reset = document.getElementById("reset")
var lap = document.getElementById("lap")
var laptime = document.getElementById("laptime")
start.addEventListener("click",function(){
    stime = Date.now()-etime
    timeint=setInterval(update,1000)
    start.disabled =true
    pause.disabled=false
})
function update(){
    etime= Date.now()-stime
    dis.textContent=millisectotime(etime)
}
function millisectotime(){
    var sec = Math.floor(etime/1000)
    var min =Math.floor(sec/60)
    var hr = Math.floor(min/60)
    return `${padZero(hr%24)}:${padZero(min%60)}${padZero(sec%60)}`

}
function padZero(value){
    if(value<10){
        return "0"+value
    }
    else{
        return value
    }
}
pause.addEventListener("click",function(){
    clearInterval(timeint)
    start.disabled=false
    pause.disabled=true
})
reset.addEventListener("click",function(){
    clearInterval(timeint)
    dis.textContent="00:00:00"
    laptime.innerHTML=""
    start.disabled=false
    pause.disabled=true

})
lap.addEventListener("click",function(){
    var laptim = millisectotime(etime)
    var laps = document.createElement("li")
    laps.textContent = `Lap ${laptime.children.length+1}:${laptim}`
    laptime.appendChild(laps)
})

