// Example data for podcast episodes
const episodes = [
    { title: "Episode 1: Introduction to Podcasting", audioSrc: "episode1.mp3" },
    { title: "Episode 2: Guest Interview", audioSrc: "episode2.mp3" },
    { title: "Episode 3: Deep Dive into Topic", audioSrc: "episode3.mp3" }
];

// Function to create a list of episodes
function createEpisodeList(episodes) {
    const episodesList = document.getElementById("episodes");
    episodesList.innerHTML = '';

    episodes.forEach((episode, index) => {
        const listItem = document.createElement("li");
        const audioPlayer = document.createElement("audio");
        audioPlayer.src = episode.audioSrc;
        audioPlayer.controls = true;

        listItem.innerHTML = `<strong>${episode.title}</strong>`;
        listItem.appendChild(audioPlayer);
        episodesList.appendChild(listItem);
    });
}

// Display the list of episodes when the page loads
window.onload = function() {
    createEpisodeList(episodes);
};
