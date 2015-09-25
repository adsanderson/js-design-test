'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ListItemComponent from 'components/ListItemComponent.js';

describe('ListItemComponent', () => {
    let ListItemComponentComponent;

    describe('default values', function () {
        beforeEach(() => {
            let listItemProps = {
                item: {
                    name: '',
                    stargazers_count: 1,
                    forks_count: 2
                }
            };
            ListItemComponentComponent = createComponent(ListItemComponent, listItemProps);
        });

        it('expect a list item to be created', function () {
            expect(ListItemComponentComponent.type).to.equal('li');
        });
        it('exect the default list to have 1 p child and 1 null child', function () {
            expect(ListItemComponentComponent.props.children).to.have.length(2);
            expect(ListItemComponentComponent.props.children[0].type).to.be.equal('p');
            expect(ListItemComponentComponent.props.children[1]).to.be.null;
        });
    });
});
