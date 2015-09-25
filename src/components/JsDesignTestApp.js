'use strict';

let React = require('react/addons');
let ReactTransitionGroup = React.addons.TransitionGroup;

let getRepoList = require('components/getRepoList');
let ListItemComponent = require('components/ListItemComponent');

// CSS
require('normalize.css');
require('../styles/main.css');

let JsDeignTestApp = React.createClass({
    displayName: 'JsDesignTestApp',
    getInitialState: function () {
        return {
            repos: []
        };
    },
    componentDidMount: function() {
        let self = this;
        getRepoList().then((repos) => {
            self.setState({
                repos: repos
            });
        });
    },
    render: function() {
        let self = this;

        let repos = self.state.repos.map(function(item) {
            const ListItemComponentProps = {
                key: item.id,
                item: item
            };
            return <ListItemComponent {...ListItemComponentProps} />;
        });

        return (
            <div>
                <div className="gb-header">
                    <a href="https://github.com/sindresorhus">sindresorhus</a>
                </div>
                <div className="gb-main">
                    <ReactTransitionGroup transitionName="fade">
                        <ul>
                            {repos}
                        </ul>
                    </ReactTransitionGroup>
                </div>
            </div>
        );
  }
});
React.render(<JsDeignTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = JsDeignTestApp;
