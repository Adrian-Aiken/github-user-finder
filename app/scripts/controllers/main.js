'use strict';

angular.module('githubUserFinderApp')
  .controller('MainCtrl', ['GithubService', function (GithubService) {
    this.Username = '';
    this.isValidUser = false;
    this.hasSearched = false;
    this.User = {};

    this.getUserInfo = function() {
      this.hasSearched = true;
      GithubService.GetGithubUser(this.Username).then(
        (response) => { // success
          console.log(response.data);
          this.User = response.data;
          this.isValidUser = true;
        },
        (reason) => { // failure
          console.log(reason);
          this.isValidUser = false;
        }
      );
    };

  }]);
