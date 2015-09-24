'use strict';

var React = require('react/addons');


// require('styles/RepoDetails.styl');

var RepoDetails = React.createClass({
    displayName: 'repoDetails',
    componentDidMount: function () {
        console.log('TEST TEST TEST');
    },
    render: function () {
        let self = this;
        let item = self.props.item;
        return (
            <div className="RepoDetails">
                {item.description}
            </div>
        );
    }
});

module.exports = RepoDetails;
