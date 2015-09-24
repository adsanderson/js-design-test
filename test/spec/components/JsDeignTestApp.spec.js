'use strict';

describe('JsDesignTestApp', () => {
  let React = require('react/addons');
  let JsDesignTestApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    JsDesignTestApp = require('components/JsDeignTestApp.js');
    component = React.createElement(JsDesignTestApp);
  });

  it('should create a new instance of JsDesignTestApp', () => {
    expect(component).to.exist;
  });
});
