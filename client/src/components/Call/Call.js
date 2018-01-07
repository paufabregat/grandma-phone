/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import hangUpLogo from './hangup.png';

const Call = ({ setRVideoRef, setLVideoRef, onHangUp }) => (
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

Call.propTypes = {
    setRVideoRef: PropTypes.func.isRequired,
    setLVideoRef: PropTypes.func.isRequired,
    onHangUp: PropTypes.func.isRequired
};

export default Call;
