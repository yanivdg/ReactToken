        // Replace 'VIDEO_ID' with the YouTube video ID you want to use as the background
    const videoId = 'c7ox2DYLdgo';
    // Replace 'START_TIME' and 'END_TIME' with the specific time you want to loop the video (in seconds)
    const startTime = 18;
    const endTime = 25;
    let player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: window.innerHeight,
        width: window.innerWidth,
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          start: startTime,
          end: endTime,
          playlist: videoId,
          modestbranding: 1,
          fs: 0,
          iv_load_policy: 3,
          showinfo: 0,
          mute: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
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
