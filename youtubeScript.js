// Your YouTube Video ID
const videoId = "c7ox2DYLdgo";

// Video start and end times (in seconds)
const startTime = 0;
const endTime = 18;

// Function to create the YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      autoplay: 1, // Autoplay the video
      loop: 1, // Loop the video
      start: startTime, // Start time of the video
      end: endTime, // End time of the video
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and info
      modestbranding: 1, // Hide YouTube logo
      playsinline: 1, // Play inline on iOS devices
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// Function to handle video playback and loop
function onPlayerReady(event) {
  event.target.playVideo();
}

// Function to restart the video when it reaches the end (looping)
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player.seekTo(startTime);
    player.playVideo();
  }
}

// Your YouTube Video ID
const videoId = "YOUR_YOUTUBE_VIDEO_ID";

let player;

// Function to create the YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player-container", {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      autoplay: 1, // Enable autoplay
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and info
      modestbranding: 1, // Hide YouTube logo
      loop: 1, // Enable video looping
      playlist: videoId, // Ensure the video loops
      playsinline: 1, // Play inline on iOS devices
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// Function to handle video playback on ready
function onPlayerReady(event) {
  // Start the video
  player.playVideo();
}

// Function to handle video state change
function onPlayerStateChange(event) {
  // Seek to the beginning and play the video again when it ends
  if (event.data === YT.PlayerState.ENDED) {
    player.seekTo(0);
    player.playVideo();
  }
}
