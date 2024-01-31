let audio = new Audio('songs/1.mp3.mp3');

let play = document.getElementById('play');
let back = document.getElementById('back');
let next = document.getElementById('next');
let soundBar = document.getElementById('input');

let curPlaying = document.getElementById('curPlaying');
let indexNo = 1;
const gifs = document.getElementById('gifs')
let songitem = Array.from(document.getElementsByClassName('songitem'));

// all song list 
let songs = [
    {songName:'aag lage chahe basti me', file:'songs/1.mp3.mp3', cover:'covers/1.jpg', duration:'2:22'},
    {songName:'barish ban jaana cover song', file:'songs/2.mp3.mp3', cover:'covers/2.jpg', duration:'4:41'},
    {songName:'kya loge tum kya doge tum', file:'songs/3.mp3.mp3', cover:'covers/3.jpg', duration:'4:58'},
    {songName:'new song to try buy this song', file:'songs/4.mp3.mp3', cover:'covers/4.jpg', duration:'0:29'},
    {songName:'rahat fateh ali khan zaaruri tha', file:'songs/5.mp3.mp3', cover:'covers/5.jpg', duration:'5:16'},
    {songName:'aag lage chahe basti me', file:'songs/6.mp3.mp3', cover:'covers/6.jpg', duration:'2:22'},
    {songName:'barish ban jaana cover song', file:'songs/7.mp3.mp3', cover:'covers/7.jpg', duration:'4:41'},
    {songName:'kya loge tum kya doge tum', file:'songs/8.mp3.mp3', cover:'covers/8.jpg', duration:'4:58'},
    {songName:'new song to try buy this song', file:'songs/9.mp3.mp3', cover:'covers/9.jpg', duration:'0:29'},
    {songName:'rahat fateh ali khan zaaruri tha', file:'songs/10.mp3.mp3', cover:'covers/10.jpg', duration:'5:16'},
    {songName:'aag lage chahe basti me', file:'songs/11.mp3.mp3', cover:'covers/11.jpg', duration:'2:22'},
]

// updating songname and cover 
songitem.forEach((el, i)=>{
    el.getElementsByTagName('img')[0].src = songs[i].cover;
    el.getElementsByClassName('songName')[0].innerHTML = songs[i].songName.slice(0,20);
    el.getElementsByClassName('duration')[0].innerHTML = songs[i].duration;
})


// play button logic
play.addEventListener('click', ()=>{
   if (audio.paused) {
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        audio.play()
        gifs.style.opacity = 1
   } else {
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
        audio.pause()
        gifs.style.opacity = 0
   }
   curPlaying.innerHTML = songs[indexNo-1].songName;

})

// next button logic
next.addEventListener('click', function nextSongFun(){
        if (indexNo >= songs.length) {
            indexNo = 1
        } else {
            indexNo += 1
        }
        audio.src = `songs/${indexNo}.mp3.mp3`
        audio.play();
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        curPlaying.innerHTML = songs[indexNo-1].songName;
        gifs.style.opacity = 1;
})


// back button logic
back.addEventListener('click', ()=>{
    if (indexNo <= 1) {
        indexNo = songs.length
    } else {
        indexNo -= 1
    }
    audio.src = `songs/${indexNo}.mp3.mp3`;
    audio.play();
    play.classList.remove('fa-play')
    play.classList.add('fa-pause')
    curPlaying.innerHTML = songs[indexNo-1].songName;
    gifs.style.opacity = 1
})

// playing song time update in input bar
audio.addEventListener('timeupdate', ()=>{
    let ct = (audio.currentTime/audio.duration)*100
    soundBar.value = ct;
    
})


soundBar.addEventListener('change', ()=>{
    audio.currentTime = (audio.duration*soundBar.value)/100
})



audio.addEventListener('ended',
 () => {
        if (indexNo >= songs.length) {
            indexNo = 1
        } else {
            indexNo += 1
        }
        audio.src = `songs/${indexNo}.mp3.mp3`
        audio.play();
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
        curPlaying.innerHTML = songs[indexNo-1].songName;
        gifs.style.opacity = 1
    }
)


// direact button to paly on every song 
let playBySong = Array.from(document.getElementsByClassName('playBySong'));

let playBySongFun = () => {
    playBySong.forEach((el)=>{
        el.classList.remove('fa-circle-pause');
        el.classList.add('fa-circle-play');
    })
}


playBySong.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        indexNo = parseInt(e.target.id)
        playBySongFun()
        audio.src = `songs/${indexNo}.mp3.mp3`
        audio.play()
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        curPlaying.innerHTML = songs[indexNo-1].songName;
        gifs.style.opacity = 1
        
        play.classList.remove('fa-play')
        play.classList.add('fa-pause')
    })
})
