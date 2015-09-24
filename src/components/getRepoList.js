'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const sortByOrder = require('lodash/collection/sortByOrder');

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

function sortRepoList (unsortedListOfRepos) {
    return sortByOrder(unsortedListOfRepos, ['stargazers_count'], ['desc']);
}

function sliceRepoList (sortedRepoList) {
  const numberOfItems = 20;
  return sortedRepoList.slice(0, numberOfItems);
}

function repoItemForComponent (repoItem) {
  return {
    id: repoItem.id,
    name: repoItem.name,
    description: repoItem.description,
    stargazers_count: repoItem.stargazers_count,
    watchers_count: repoItem.watchers_count,
    forks_count: repoItem.forks_count,
    updated_at: repoItem.updated_at
  };
}

function repoListForComponent (slicedRepoList) {
    return slicedRepoList.map(repoItemForComponent);
}

function getRepoList () {
    return fetch('https://api.github.com/users/sindresorhus/repos')
        .then(checkStatus)
        .then(parseJSON)
        .then(sortRepoList)
        .then(sliceRepoList)
        .then(repoListForComponent);
}

module.exports = getRepoList;
