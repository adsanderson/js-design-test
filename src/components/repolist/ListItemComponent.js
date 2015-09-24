'use strict';

var React = require('react/addons');


require('styles/repolist/ListItemComponent.styl');

var ListItemComponent = React.createClass({
    displayName: 'ListItemComponent',
    render: function () {
        let self = this;

        let item = self.props.item;

        return (
            <li>
                <p>
                    {item.name}
                    <span>
                        {item.stargazers_count}
                        {item.forks_count}
                    </span>
                </p>
                <div></div>
            </li>
        );
  }
});

module.exports = ListItemComponent;
