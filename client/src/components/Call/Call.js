/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react';
import hangUpLogo from './hangup.png';

export default function ({ setRVideoRef, setLVideoRef, onHangUp }) {
    return (
        <div className="call-screen" >
            <div className="video-stream">
                <video id="remoteVideo" ref={setRVideoRef} autoPlay />
                <video id="localVideo" ref={setLVideoRef} autoPlay muted />
            </div>
            <div className="hang-up" onClick={onHangUp}>
                <img src={hangUpLogo} alt="hang-up-logo" />
                <div> Hang up </div>
            </div>
        </div>
    );
}
