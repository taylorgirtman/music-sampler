let audioDivs = document.querySelectorAll('.audioDivs');
let albumIcons = document.querySelectorAll('.albumIcons');

function hideAll() {
  audioDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumIcons.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();

    switch (e.target.getAttribute('id')) {
         case 'sheer-heart-attack':
           document.querySelector('#killer_queen)
             .style.display = 'block';
           break;
         case 'night-at-the-opera':
           document.querySelector('#bohemian_rhapsody')
             .style.display = 'block';
           break;
         case 'day-at-the-races'':
           document.querySelector('#somebody_love')
           .style.display = 'block';
           break;
         case 'jazz':
           document.querySelector('#dont_stop')
           .style.display = 'block';
           break;  }


    let players = document.querySelectorAll('audio-div');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
      }
    });
