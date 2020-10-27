const REGEX_SRC_SET = /^\s*(.+)\s+(\d+)([wh])?\s*$/;

export function isPlaying(video:HTMLVideoElement) {
    return !video.paused &&
           !video.ended &&
           video.currentTime > 0 &&
           video.readyState > 2;
}

function parseSrcSet(srcSet:string)
{
    
    
    var sources = [];
    var parts = srcSet.split(',');
    
    for (var i in parts) {
        var result;
        if (result = parts[i].match(REGEX_SRC_SET)) {
            sources.push({
                width: parseInt(result[2]),
                src: result[1],
            });
        }
    }

    return sources;
}

export function matchSrcSet(srcSet:string, screenWidth:number) {
    var sources = parseSrcSet(srcSet);

    var selectedDiff = null;
    var source = null;

    for (var i in sources) {
        var candidate = sources[i];
        var candidateDiff = candidate.width - screenWidth;

        if (source === null ||  // First One
            (selectedDiff < 0 && candidateDiff >= 0) || // Got smaller - and then larger
            (candidateDiff < 0 && candidateDiff > selectedDiff) ||
            (candidateDiff >= 0 && candidateDiff < selectedDiff) // Got one that match better
        ) {
            selectedDiff = candidateDiff;
            source = candidate.src;
        }
    }

    return source;
}
