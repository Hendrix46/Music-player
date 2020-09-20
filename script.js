const songs = [
    "muzlome_Regard_-_Ride_It_b128f0d158.mp3",
    "muzlome_Santiz_-_Rastafari_b128f0d148.mp3",
    "muzlome_Sofia_Mills_-_Coffee_Breath_65939806.mp3",
    "muzlome_Take_My_Heart_Away_-_Imagine_Dragons_b128f0d234.mp3"
];

const createSongList = () => {
    const list = document.createElement('ol');

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));

        list.appendChild(item)
    }
    return list
};

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target;
    const source = document.getElementById('source');
    source.src =  clickedItem.innerText; //on HTML the source tag has an src. We are attaching the path for the songs
    //the "innerText" means the name of the file (check??)

    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing:";

    document.getElementById('currentSong').innerText = clickedItem.innerText;

    player.load();// this will load the selected audio into the players
    player.play() // will play the song as soon as we click on one

};

const playAudio = () => {
    if(player.readyState) { // it returns TRUE if the file is fully loaded.
        player.play()  // meaning...if it's true, play the player
    }
};

const pauseAudio = () => {
    player.pause()
};

const slider = document.getElementById('volumeSlider');
slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume // il volume del player e' uguale al valore della costante chiamata "volume"  appena creata una riga piu' su
};

const updateProgress = () => {
    if(player.currentTime > 0) { // without this IF, we have an error since it can't calculate the progressBar.value if it
        //doesn't know the duration of the song. Like this, it will start doing the math only once the song has started.
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100  // so we can have a %
    }
};