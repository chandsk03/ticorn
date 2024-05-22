const previewDuration = 4000; // Duration of preview in milliseconds
let previewTimeouts = {};

function startPreview(video) {
  if (video.readyState >= 2) { // Check if video is ready for playback
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
  } else {
    console.error('Video is not ready for preview.');
  }
}

function stopPreview(video) {
  video.currentTime = 0;
  video.playbackRate = 1;
  video.pause();
}

function handleMouseEnter(event) {
  const video = event.target;
  if (!previewTimeouts[video.id]) {
    startPreview(video);
    previewTimeouts[video.id] = setTimeout(() => stopPreview(video), previewDuration);
  }
}

function handleMouseLeave(event) {
  const video = event.target;
  clearTimeout(previewTimeouts[video.id]);
  delete previewTimeouts[video.id];
  stopPreview(video);
}

const videos = document.querySelectorAll('video');
videos.forEach(video => {
  video.addEventListener("mouseenter", handleMouseEnter);
  video.addEventListener("mouseleave", handleMouseLeave);
});
