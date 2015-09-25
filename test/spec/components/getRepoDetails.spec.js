'use strict';

const getRepoDetails = require('components/getRepoDetails');
const githubAPILanguagesMock = require('helpers/sindresorhus_repo_mock_languages.js');

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



describe('getRepoDetails', () => {
    beforeEach(() => {
        sinon.stub(window, 'fetch');
    });

    afterEach(() => {
        window.fetch.restore();
    });

    it('expect the function to exist', () => {
        expect(getRepoDetails).to.be.a("function");
    });

    describe('returning a positive response', function () {

        beforeEach(() => {
            window.fetch.returns(jsonOk(githubAPILanguagesMock));
        });


        it('expect getRepoDetails to return an array', function (done) {
            getRepoDetails().then((languages) => {
                expect(languages).to.be.an("array");
                done();
            });
        });

        it('expect item in array to have a name and percentage', function (done) {
            getRepoDetails().then((languages) => {
                //expect(repos).to.be.an("array");
                let language = languages[0];
                expect(language).to.have.keys(['name', 'percentage']);
                expect(language.name).to.be.a('string');
                expect(language.percentage).to.be.a('string');
                done();
            });
        });

        it('expect the percentage to contain a percentage symbol', function (done) {
            getRepoDetails().then((languages) => {
                let language = languages[0];
                expect(language.percentage).to.have.string("%");
                done();
            });
        });

    });

});
