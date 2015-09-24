'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RepoDetails from 'components/RepoDetails.js';

describe('RepoDetails', () => {
    let RepoDetailsComponent;

    beforeEach(() => {
        RepoDetailsComponent = createComponent(RepoDetails);
    });

    it('should have its component name as default className', () => {
        expect(RepoDetailsComponent._store.props.className).toBe('RepoDetails');
    });
});
