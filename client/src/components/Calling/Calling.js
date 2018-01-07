import React from 'react';
import PropTypes from 'prop-types';

const Calling = ({ userName, userImg, callThumbColor }) => {
    const imgStyle = {
        background: `url(${userImg}) no-repeat center/cover`
    };
    const wrapCallThumbStyle = {
        backgroundColor: callThumbColor
    };
    return (
        <div className="calling-screen vertical-align" >
            <div className="wrap-calling-thumb vertical-align" style={wrapCallThumbStyle} >
                <div className="calling-thumb" style={imgStyle} />
            </div>
            <div className="calling-message">
                {`Calling ${userName}. Please wait`}
            </div>
        </div>
    );
};

Calling.propTypes = {
    userName: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired,
    callThumbColor: PropTypes.string.isRequired
};

export default Calling;
