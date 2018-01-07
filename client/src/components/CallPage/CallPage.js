/* eslint jsx-a11y/media-has-caption: 0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Call from './Call';

import '../../styles/Call.css';
import '../../../node_modules/webrtc-adapter';

class CallPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
            .then(this.gotStream);
    }

    onHangUp = () => {
        this.props.history.push('/');
    }

    setLVideoRef = (ref) => {
        this.localVideo = ref;
    }

    setRVideoRef = (ref) => {
        this.remoteVideo = ref;
    }

    gotStream = (stream) => {
        this.localVideo.srcObject = stream;
        this.remoteVideo.srcObject = stream;
    }


    render() {
        return (
            <Call
                setRVideoRef={this.setRVideoRef}
                setLVideoRef={this.setLVideoRef}
                onHangUp={this.onHangUp}
            />
        );
    }
}

export default withRouter(CallPage);
