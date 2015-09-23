'use strict';

var React = require('react/addons');


require('styles/repolist/ListItemComponent.styl');

var ListItemComponent = React.createClass({

  render: function () {
    return (
        <div className="ListItemComponent">
          <p>Content for ListItemComponent</p>
        </div>
      );
  }
});

module.exports = ListItemComponent;
