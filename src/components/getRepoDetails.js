'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON (response) {
  return response.json();
}

function returnLangaugesWithPercentage (languagesObj) {
  let languagesArray = [];
  let totalLines = 0;
  Object.keys(languagesObj).forEach((prop) => {
    totalLines += languagesObj[prop];
  });
  Object.keys(languagesObj).forEach((prop) => {
    let percentage = Math.round((languagesObj[prop] / totalLines) * 100);
    languagesArray.push({
      name: prop,
      percentage: percentage + '%'
    });
  });
  return languagesArray;
}

function getRepoDetails (repo) {
    return fetch('https://api.github.com/repos/sindresorhus/' + repo + '/languages')
        .then(checkStatus)
        .then(parseJSON)
        .then(returnLangaugesWithPercentage);
}

module.exports = getRepoDetails;
