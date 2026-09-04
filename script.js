// Simulated Last.fm track rotation to give a live music vibe
const tracklist = [
    { track: "Untitled 13", artist: "Aphex Twin" },
    { track: "Alison", artist: "Slowdive" },
    { track: "Vordhosbn", artist: "Aphex Twin" },
    { track: "Aerodynamic", artist: "Daft Punk" },
    { track: "Disorder", artist: "Joy Division" }
];

let currentIndex = 0;
let scrobbles = 142890;

function updateScrobble() {
    const current = tracklist[currentIndex];
    document.getElementById('trackName').innerText = current.track;
    document.getElementById('artistName').innerText = current.artist;
    
    // Simulate scrobble count tick
    scrobbles += 1;
    document.getElementById('scrobbleCount').innerText = scrobbles.toLocaleString();
    
    currentIndex = (currentIndex + 1) % tracklist.length;
}

// Initial set and interval change every 8 seconds
updateScrobble();
setInterval(updateScrobble, 8000);