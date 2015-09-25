'use strict';

var React = require('react/addons');

var getRepoDetails = require('components/getRepoDetails');

var RepoDetails = React.createClass({
    displayName: 'repoDetails',
    getInitialState: function () {
        return {
            languages: []
        };
    },
    componentDidMount: function () {
        let self = this;
        getRepoDetails(self.props.item.name)
        .then((languages) => {
            self.setState({
                languages: languages
            });
        });
    },
    render: function () {
        let self = this;
        let item = self.props.item;

        let languageComponent = self.state.languages.map((language, index) => {
            return (<div key={index}>{language.name} {language.percentage}</div>);
        });

        return (
            <div className="RepoDetails">
                <div>
                    {item.description}
                </div>
                {languageComponent}
            </div>
        );
    }
});

module.exports = RepoDetails;
