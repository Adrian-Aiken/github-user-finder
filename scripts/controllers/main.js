'use strict';

angular.module('githubUserFinderApp')
  .controller('MainCtrl', ['GithubService', function (GithubService) {
    var ctrl = this;

    ctrl.username = '';
    ctrl.isValidUser = true;
    ctrl.hasSearched = false;
    ctrl.user = null;
    ctrl.searchedUsername = '';

    ctrl.getUserInfo = function() {
      GithubService.GetGithubUser(ctrl.username).then(
        (successResponse) => { 
          ctrl.user = successResponse.data;
          ctrl.isValidUser = true;
          ctrl.hasSearched = true;
        },
        (failureReason) => {          
          ctrl.searchedUsername = ctrl.username;
          ctrl.isValidUser = false;
          ctrl.hasSearched = true;
        }
      );
    };

  }]);
