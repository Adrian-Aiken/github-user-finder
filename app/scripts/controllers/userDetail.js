'use strict';

angular.module('githubUserFinderApp')
    .component('userDetail', {
        templateUrl: 'views/userDetail.html',
        bindings: {
            user: '<'
        },
        controller: ['$scope', 'GithubService', function($scope, GithubService) {
            var ctrl = this;
            ctrl.isLoading = true;
            ctrl.Repos = null;
            ctrl.Gists = null;

            ctrl.$onInit = () => {
                ctrl.updatePage();
            }

            ctrl.$onChanges = () => {
                ctrl.updatePage();
            }

            ctrl.updatePage = () => {
                Promise.all(
                    [
                        GithubService.GetUserRepos(ctrl.user.login),
                        GithubService.GetUserGists(ctrl.user.login)
                    ]
                )
                .then((responses) => {
                    ctrl.Repos = responses[0].data;
                    ctrl.Gists = responses[1].data;
                    ctrl.isLoading = false;
                });
            }
        }]
    });