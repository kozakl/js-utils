export function isPlaying(video:HTMLVideoElement) {
    return !video.paused &&
           !video.ended &&
           video.currentTime > 0 &&
           video.readyState > 2;
}
