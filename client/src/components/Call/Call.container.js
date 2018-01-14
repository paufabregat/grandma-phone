/* eslint jsx-a11y/media-has-caption: 0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Call from './Call';
import { stopCall } from '../../helpers/events/events';

import '../../styles/Call.css';
import '../../../node_modules/webrtc-adapter';

class CallContainer extends Component {
    constructor(props) {
        super(props);
        stopCall(() => {
            this.onHangUp();
        });
    }

    componentDidMount() {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        })
            .then(this.gotStream);
    }

    componentWillUnmount() {
        this.onHangUp();
    }

    onHangUp = () => {
        this.stream.getVideoTracks()[0].stop();
        // this.stream.getAudioTracks()[0].stop();
        // eslint-disable-next-line
        setTimeout(() => this.props.history.push('/'), 1000);
    }

    setLVideoRef = (ref) => {
        this.localVideo = ref;
    }

    setRVideoRef = (ref) => {
        this.remoteVideo = ref;
    }

    gotStream = (stream) => {
        this.stream = stream;
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

export default withRouter(CallContainer);
