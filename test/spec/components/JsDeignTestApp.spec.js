'use strict';

describe('JsDeignTestApp', () => {
  let React = require('react/addons');
  let JsDeignTestApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    JsDeignTestApp = require('components/JsDeignTestApp.js');
    component = React.createElement(JsDeignTestApp);
  });

  it('should create a new instance of JsDeignTestApp', () => {
    expect(component).toBeDefined();
  });
});
