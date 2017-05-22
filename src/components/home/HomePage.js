import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>This is a test of a course on Pluralsight</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
            </div>
        );
    }
}

export default HomePage;