'use strict';

angular.module('githubUserFinderApp')
  .controller('MainCtrl', ['GithubService', function (GithubService) {
    this.Username = '';
    this.isValidUser = false;
    this.hasSearched = false;
    this.User = null;

    this.getUserInfo = function() {
      GithubService.GetGithubUser(this.Username).then(
        (successResponse) => { 
          this.User = successResponse.data;
          this.isValidUser = true;
          this.hasSearched = true;
        },
        (failureReason) => {
          console.log(failureReason);
          this.isValidUser = false;
          this.hasSearched = true;
        }
      );
    };

  }]);
