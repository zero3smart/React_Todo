import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root">
                <div className="content-wrapper">
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {

}

export default App;