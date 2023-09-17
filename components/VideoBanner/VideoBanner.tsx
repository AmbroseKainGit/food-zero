import YouTube from 'react-youtube';
import React, { useRef } from 'react';

interface props {
    videoId: string;
    title: string;
    description: string;
}
export const VideoBanner = ({ videoId, title, description }: props) => {
    const playerRef = useRef<any>(null);
    const opts = {
        height: '2440',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1
        },
    };
    const onEnd = (event: any) => {
        playerRef.current.internalPlayer.playVideo();
    };
    return (
        <>
            <div className="video-background">
                <div className="video-foreground">
                    <YouTube videoId={videoId} opts={opts} onEnd={onEnd} ref={playerRef} />
                    <div className="banner-content">
                        <div className="banner-content__title">
                            {title}
                        </div>
                        <div className="banner-content__description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
