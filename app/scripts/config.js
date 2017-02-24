/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.dashboard_1', {
            url: "/dashboard_1",
            templateUrl: "views/dashboard_1.html",
            data: { pageTitle: 'Dashboard 1' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'bower_components/plugins/flot/jquery.flot.js', 'bower_components/plugins/flot/jquery.flot.time.js', 'bower_components/plugins/flot/jquery.flot.tooltip.min.js', 'bower_components/plugins/flot/jquery.flot.spline.js', 'bower_components/plugins/flot/jquery.flot.resize.js', 'bower_components/plugins/flot/jquery.flot.pie.js', 'bower_components/plugins/flot/curvedLines.js', 'bower_components/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['bower_components/plugins/chartJs/angles.js', 'bower_components/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['bower_components/plugins/peity/jquery.peity.min.js', 'bower_components/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }

        })
        .state('index.dashboard_4_1', {
            url: "/dashboard_4_1",
            templateUrl: "views/dashboard_4_1.html",
            data: { pageTitle: 'Dashboard 4' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['bower_components/plugins/chartJs/angles.js', 'bower_components/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['bower_components/plugins/peity/jquery.peity.min.js', 'bower_components/plugins/peity/angular-peity.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'bower_components/plugins/flot/jquery.flot.js', 'bower_components/plugins/flot/jquery.flot.time.js', 'bower_components/plugins/flot/jquery.flot.tooltip.min.js', 'bower_components/plugins/flot/jquery.flot.spline.js', 'bower_components/plugins/flot/jquery.flot.resize.js', 'bower_components/plugins/flot/jquery.flot.pie.js', 'bower_components/plugins/flot/curvedLines.js', 'bower_components/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('index.setting', {
            url: "/setting",
            templateUrl: "views/setting.html",
            data: { pageTitle: '参数设置' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['styles/plugins/summernote/summernote.css','styles/plugins/summernote/summernote-bs3.css','bower_components/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['styles/plugins/summernote/summernote.css','styles/plugins/summernote/summernote-bs3.css','bower_components/plugins/summernote/summernote.min.js','bower_components/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }

        })
        .state('index.try', {
            url: "/try",
            templateUrl: "views/try.html",
            data: { pageTitle: '参数设置' },


        })











}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });