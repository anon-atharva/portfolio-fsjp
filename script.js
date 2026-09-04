// GitHub Pages Repo Router Configuration
const BASE_PATH = '/portfolio-fsjp';

const routes = {
    [BASE_PATH]: 'view-home',
    [`${BASE_PATH}/`]: 'view-home',
    [`${BASE_PATH}/projects`]: 'view-projects',
    [`${BASE_PATH}/skills`]: 'view-skills',
    [`${BASE_PATH}/education`]: 'view-education'
};

function navigateTo(url) {
    window.history.pushState(null, null, url);
    router();
}

function router() {
    let path = window.location.pathname;
    
    // Remove trailing slash if present for consistency (except root)
    if (path.length > BASE_PATH.length + 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    const viewId = routes[path] || 'view-home';

    // Hide all view sections
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    // Show active view section
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.add('active');
    }

    // Update nav highlighted state
    document.querySelectorAll('.nav-links .nav-item').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === path || (path === `${BASE_PATH}/` && href === BASE_PATH)) {
            link.classList.add('active');
        }
    });
}

// Intercept link clicks
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.getAttribute('href'));
        }
    });

    window.addEventListener('popstate', router);
    router();
});

// Last.fm track rotation
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