'use strict';

const URL_BASE = 'https://api.github.com';

angular.module('githubUserFinderApp')
    .service('GithubService', ['$http', function($http) {
        this.GetGithubUser = function(username) {
            return $http.get(URL_BASE + '/users/' + username);
        };
    }]);