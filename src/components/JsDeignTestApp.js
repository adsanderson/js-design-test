'use strict';

let React = require('react/addons');
let ReactTransitionGroup = React.addons.TransitionGroup;

let getRepoList = require('components/repoList/getRepoList');
let ListItemComponent = require('components/repolist/ListItemComponent');

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
            <div className="main">
                <ReactTransitionGroup transitionName="fade">
                    {repos}
                </ReactTransitionGroup>
            </div>
        );
  }
});
React.render(<JsDeignTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = JsDeignTestApp;
