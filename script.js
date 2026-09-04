// --- Client-side Router for Subpages ---
const routes = {
    '/': 'view-home',
    '/projects': 'view-projects',
    '/skills': 'view-skills',
    '/education': 'view-education'
};

function navigateTo(url) {
    window.history.pushState(null, null, url);
    router();
}

function router() {
    const path = window.location.pathname;
    const viewId = routes[path] || 'view-home';

    // Hide all view sections
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    // Show the requested view section
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.add('active');
    }

    // Update active state in header navigation links
    document.querySelectorAll('.nav-links .nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
}

// Intercept link clicks for smooth SPA navigation
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', router);
    
    // Initial route resolve
    router();
});

// --- Last.fm Track Rotation ---
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