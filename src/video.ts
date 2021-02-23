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

    
    if (window.devicePixelRatio === 1) {
        var selectedDiff = null;
        var source = null;
    
        var f = sources[0];
        
        for (var i in sources) {
            var candidate = sources[i];
            var candidateDiff = candidate.width - screenWidth;
    
            
            var g = candidate.width / screenWidth;
            var odiff = Math.abs((f.width / screenWidth) - window.devicePixelRatio);
            var diff = Math.abs((candidate.width / screenWidth) - window.devicePixelRatio);
            
            if (sources[i].width)
            {
                
            }
            
            
            
            console.log(odiff, diff);
            
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
    else {
        let current = sources[0];
        sources.forEach((source)=> {
            const lastDiff = Math.abs((current.width / screenWidth) - window.devicePixelRatio),
                  diff = Math.abs((source.width / screenWidth) - window.devicePixelRatio);
            if (diff < lastDiff) {
                current = source;
            }
        });
        
        return current.src;
    }
}