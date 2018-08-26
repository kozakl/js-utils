interface Element extends HTMLElement {
    mozRequestFullScreen():void;
    msRequestFullscreen():void;
}

export default class FullScreen
{
    public static CHANGE = (<Element>document.documentElement).requestFullscreen       && 'fullscreenchange'       ||
                           (<Element>document.documentElement).webkitRequestFullscreen && 'webkitfullscreenchange' ||
                           (<Element>document.documentElement).mozRequestFullScreen    && 'mozfullscreenchange'    ||
                           (<Element>document.documentElement).msRequestFullscreen     && 'MSFullscreenChange';
    
    public static isSupported()
    {
        return !!((<Element>document.documentElement).requestFullscreen       ||
                  (<Element>document.documentElement).webkitRequestFullscreen ||
                  (<Element>document.documentElement).mozRequestFullScreen    ||
                  (<Element>document.documentElement).msRequestFullscreen);
    }
    
    public static isFullScreen()
    {
        return !!((<Doc>document).fullscreenElement       ||
                  (<Doc>document).webkitFullscreenElement ||
                  (<Doc>document).mozFullScreenElement    ||
                  (<Doc>document).msFullscreenElement);
    }
    
    public static request()
    {
        if ((<Element>document.documentElement).requestFullscreen)
            (<Element>document.documentElement).requestFullscreen();
        else if ((<Element>document.documentElement).webkitRequestFullscreen)
            (<Element>document.documentElement).webkitRequestFullscreen();
        else if ((<Element>document.documentElement).mozRequestFullScreen)
            (<Element>document.documentElement).mozRequestFullScreen();
        else if ((<Element>document.documentElement).msRequestFullscreen)
            (<Element>document.documentElement).msRequestFullscreen();
    }
    
    public static exit()
    {
        if ((<Doc>document).exitFullscreen)
            (<Doc>document).exitFullscreen();
        else if ((<Doc>document).webkitExitFullscreen)
            (<Doc>document).webkitExitFullscreen();
        else if ((<Doc>document).mozCancelFullScreen)
            (<Doc>document).mozCancelFullScreen();
    }
}

interface Doc extends Document {
    mozFullScreenElement:any;
    msFullscreenElement:any;
    mozCancelFullScreen:any;
}
