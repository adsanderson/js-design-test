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
        }

        let repoDetails = null;
        let lastUpdate = null;

        if (self.state.showDetails) {
            let repoDetailsProps = {
                item: item
            };
            repoDetails = (<RepoDetails {...repoDetailsProps} />);
            lastUpdate = (<span>item.updated_at</span>);
        }

        return (
            <li {...listItemProps}>
                <p>
                    <span>
                        {item.name}
                    </span>
                    {lastUpdate}
                    <span>
                        {item.stargazers_count}
                        {item.forks_count}
                    </span>
                    {repoDetails}
                </p>
            </li>
        );
  }
});

module.exports = ListItemComponent;
