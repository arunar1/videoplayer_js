let playbtn=document.getElementById('play-btn');

let video=document.querySelector('.video');
let progressbar=document.querySelector('.progress-bar');
let progressRange=document.querySelector('.progress-range')
let isVideoPlaying=false;

//play or pause
const playorpause=(event)=>{
    if(!isVideoPlaying){
        video.play()
        isVideoPlaying=true;
        playbtn.classList.replace('fa-play','fa-pause')
    }
    else{
        video.pause()
        isVideoPlaying=false;
        playbtn.classList.replace('fa-pause','fa-play')
    }
}

//update progress bar

const updateprogressbar=(event)=>{
    // console.log(event.target.currentTime,event.target.duration);
    let value=(event.target.currentTime)*100
    progressbar.style.cssText= `
    width:${value/event.target.duration}%
    `;
    // progressbar.style.cssText='backgroundColor:"red"'
}
//update seek

const updateSeekbar=(event)=>{
    let calculateWidth=progressRange.getBoundingClientRect();
    console.log(calculateWidth)
   let currentPoint= event.offsetX;
   let progressBarWidth=calculateWidth;
   let currentRange=(currentPoint/progressBarWidth)*video.duration;
   video.currentTime=currentRange;
   console.log(currentRange);

}

//add event listerners

playbtn.addEventListener('click',playorpause);
video.addEventListener('click',playorpause);
video.addEventListener('timeupdate',updateprogressbar)
progressRange.addEventListener('click',updateSeekbar);

