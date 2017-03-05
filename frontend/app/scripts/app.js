/**
 * INSPINIA - Responsive Admin Theme
 *
 */

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad
/**
 * Angular Test Application for ngmqtt
 * ---------------------------
 *
 * Authored by  Vasco Santos
 *              santos.vasco10@gmail.com
 *              http://vasco-santos.github.io/
 */

/*
 Create Angular Application
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                    // ngSanitize
        'uiSwitch',
        'ngmqtt',
        'kmqtt',
        'socket.io'
    ])

})();
