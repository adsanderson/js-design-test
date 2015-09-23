'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ListItemComponent from 'components/repolist/ListItemComponent.js';

describe('ListItemComponent', () => {
    let ListItemComponentComponent;

    beforeEach(() => {
        ListItemComponentComponent = createComponent(ListItemComponent);
    });

    it('should have its component name as default className', () => {
        expect(ListItemComponentComponent._store.props.className).toBe('ListItemComponent');
    });
});
