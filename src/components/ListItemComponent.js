'use strict';

var React = require('react/addons');

var RepoDetails = require('components/RepoDetails');


//require('styles/repolist/ListItemComponent.styl');

var ListItemComponent = React.createClass({
    displayName: 'ListItemComponent',
    getInitialState: function () {
        return {
            showDetails: false
        };
    },
    onClick: function () {
        let self = this;
        self.setState({
            showDetails: !self.state.showDetails
        });
    },
    render: function () {
        let self = this;
        let item = self.props.item;

        let listItemProps = {
            onClick: self.onClick
        };

        let repoDetails = null;
        let lastUpdate = null;

        if (self.state.showDetails) {
            let repoDetailsProps = {
                item: item
            };
            repoDetails = (<RepoDetails {...repoDetailsProps} />);
            lastUpdate = (<span className="gb-update">Last Updated: {item.updated_at}</span>);
        }

        return (
            <li {...listItemProps}>
                <p>
                    <span className="gb-name">
                        {item.name}
                    </span>
                    {lastUpdate}
                    <span className="gb-counts">
                        <i className="fa fa-star"></i>
                        {item.stargazers_count}
                        <i className="fa fa-code-fork"></i>
                        {item.forks_count}
                    </span>
                </p>
                {repoDetails}
            </li>
        );
  }
});

module.exports = ListItemComponent;
