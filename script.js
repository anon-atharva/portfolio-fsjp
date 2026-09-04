// Simulated Last.fm track rotation to fit the retro audio interface vibe
const tracklist = [
    { track: "Vordhosbn", artist: "Aphex Twin" },
    { track: "Alison", artist: "Slowdive" },
    { track: "Disorder", artist: "Joy Division" },
    { track: "Archangel", artist: "Burial" }
];

let index = 0;
let scrobbles = 142890;

function rotateTrack() {
    const trackElement = document.getElementById('trackName');
    const artistElement = document.getElementById('artistName');
    const scrobbleElement = document.getElementById('scrobbleCount');

    if (trackElement && artistElement && scrobbleElement) {
        trackElement.innerText = tracklist[index].track;
        artistElement.innerText = tracklist[index].artist;

        scrobbles += 1;
        scrobbleElement.innerText = scrobbles.toLocaleString();

        index = (index + 1) % tracklist.length;
    }
}

rotateTrack();
setInterval(rotateTrack, 7000);