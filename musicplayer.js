let play=document.getElementById("play");
let pause=document.getElementById("pause");
let song=document.getElementById("song");
let progress=document.getElementById("progress");
function PlaySong(){
    song.play();
    song.volume=0.6;
    play.style.display="none";
    pause.style.display="flex";

}
function PauseSong(){
    song.pause();
    pause.style.display="none";
    play.style.display="flex";
    /* when we click on pause,it will play at start-onwards
    song.currentTime=0;
    */
}
song.addEventListener("timeupdate",()=>{
    let percentage=Math.floor((song.currentTime/song.duration)*100)
    progress.style.width=percentage+"%";
    
})
