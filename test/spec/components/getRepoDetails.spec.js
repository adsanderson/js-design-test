'use strict';

const getRepoList = require('components/getRepoList');
const githubAPIMock = require('helpers/sindresorhus_repos.js');

function jsonOk (body) {
  let mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

function jsonError (status, body) {
  let mockResponse = new window.Response(JSON.stringify(body), {
    status: status,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.reject(mockResponse);
}



describe('getRepoList', () => {
    beforeEach(() => {
        sinon.stub(window, 'fetch');
    });

    afterEach(() => {
        window.fetch.restore();
    });

    it('expect the function to exist', () => {
        expect(getRepoList).to.be.a("function");
    });

    describe('returning a positive response', function () {

        beforeEach(() => {
            window.fetch.returns(jsonOk(githubAPIMock));
        });


        it('expect getRepoList to return an array', function (done) {
            getRepoList().then((repos) => {
                expect(repos).to.be.an("array");
                done();
            });
        });

        it('expect getRepoList to return an array sorted by stargazers', function (done) {
            getRepoList().then((repos) => {
                const itemStars1 = repos[0].stargazers_count;
                const itemStars2 = repos[1].stargazers_count;
                const itemStars3 = repos[2].stargazers_count;
                expect(itemStars1).to.be.at.least(itemStars2);
                expect(itemStars2).to.be.at.least(itemStars3);
                done();
            });
        });

        it('expect the top 20 items to be returned', function (done) {
            getRepoList().then((repos) => {
                const numberOfItems = 20;
                expect(githubAPIMock).to.have.length.above(numberOfItems);
                expect(repos).to.have.length.of.at.most(numberOfItems);
                done();
            });
        });

        it('expect each repo item to be filtered to the relevant data for the component', function (done) {
            getRepoList().then((repos) => {

                const expectedRepoKeys = [
                    "id",
                    "name",
                    "stargazers_count",
                    "watchers_count",
                    "forks_count"
                ];

                const testRepoItem = repos[0];

                expect(testRepoItem).to.have.keys(expectedRepoKeys);

                done();
            });
        });
    });

});
