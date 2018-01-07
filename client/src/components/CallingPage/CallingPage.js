import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calling from './Calling';
import fakeContact from '../../helpers/data/fakeContacts';
import '../../styles/CallingPage.css';

const tone = new Audio('/assets/one-call-tone.mp3');
class CallingPage extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line
        const userName = props.match.params.name;
        let userImg = null; // TODO may be add redux and put it in the state
        fakeContact.forEach((contact) => {
            if (userName === contact.name) {
                userImg = contact.image_path;
            }
        });
        this.state = {
            isConnectionStablished: false,
            callThumbColor: '#4A4A4A',
            timerId: null,
            userImg
        };
    }

    componentDidMount() {
        this.loopTone();
    }

    componentWillUnmount() {
        tone.pause();
        clearTimeout(this.timerId);
    }

    changeScreen() {
        const userName = this.props.match.params.name;
        setTimeout(() =>
            this.props.history.push(`/call/${userName}`)
            , 10000);
    }

    changeWrapThumbColor() {
        const timerId = setTimeout(() =>
            this.setState({
                callThumbColor: 'rgba(74, 74, 74, 0.67)'
            }), 3300);
        this.setState({
            callThumbColor: '#4A4A4A',
            timerId
        });
    }

    loopTone() {
        tone.addEventListener('ended', function resetAudio() {
            this.currentTime = 0;
            this.play();
        }, false);
        tone.addEventListener('play', () => {
            this.changeWrapThumbColor();
        });
        tone.play();
    }

    render() {
        const userName = this.props.match.params.name;
        return (<Calling
            userName={userName}
            userImg={this.state.userImg}
            callThumbColor={this.state.callThumbColor}
        />);
    }
}

export default withRouter(CallingPage);
