import React, { Component, PropTypes } from 'react';

const App = (props) => {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
