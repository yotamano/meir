
// const slider = document.getElementById('slider');
// const ctx = new AudioContext();

// fetch("https://upload.wikimedia.org/wikipedia/en/d/dc/Strawberry_Fields_Forever_(Beatles_song_-_sample).ogg")
//   .then( resp => resp.arrayBuffer() )
//   .then( buf => ctx.decodeAudioData(buf) )
//   .then( prepareUI )
//   .catch( console.error );
  
// function prepareUI( audioBuf ) {
//   let source;
//   $(window).on('scroll', function(){
//     var s = $(window).scrollTop(),
//     d = $(document).height(),
//     c = $(window).height();

// var scrollPercent = (s / (d - c)) ;

//     if( source ) { source.stop(0); }
//     source = ctx.createBufferSource();
//     source.buffer = audioBuf;
//     source.connect(ctx.destination);
//     const offset = scrollPercent * audioBuf.duration;
//     const duration = 0.05;
//     source.start(0, offset, duration);
  
//   })
// }



let audio = document.querySelector('audio')

$(document).ready(function() {

$(window).on('scroll', function(){
var s = $(window).scrollTop(),
d = $(document).height(),
 c = $(window).height();
  
 var scrollPercent = (s / (d - c)) ;
 audio.play()
 audio.playbackRate=0.5;
})
})