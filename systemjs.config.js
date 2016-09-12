/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

			// angular
			'@angular':										'npm:@angular',
      '@angular2-material':         'npm:@angular2-material',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
			// angular bundles:
			'@angular/core': { main: 'bundles/core.umd.js' },
			'@angular/common': { main: 'bundles/common.umd.js' },
			'@angular/compiler': { main: 'bundles/compiler.umd.js' },
			'@angular/platform-browser': { main: 'bundles/platform-browser.umd.js' },
			'@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js' },
			'@angular/http': { main: 'bundles/http.umd.js' },
			'@angular/router': { main: 'bundles/router.umd.js' },
			'@angular/forms': { main: 'bundles/forms.umd.js' },
      // angular2-material bundles
      '@angular2-material/button': { main: 'button.umd.js' },
      '@angular2-material/button-toggle': { main: 'button-toggle.umd.js' },
      '@angular2-material/card': { main: 'card.umd.js' },
      '@angular2-material/core': { main: 'core.umd.js' },
      '@angular2-material/checkbox': { main: 'checkbox.umd.js' },
      '@angular2-material/grid-list': { main: 'grid-list.umd.js' },
      '@angular2-material/icon': { main: 'icon.umd.js' },
      '@angular2-material/input': { main: 'input.umd.js' },
      '@angular2-material/list': { main: 'list.umd.js' },
      '@angular2-material/menu': { main: 'menu.umd.js' },
      '@angular2-material/progress-bar': { main: 'progress-bar.umd.js' },
      '@angular2-material/progress-circle': { main: 'progress-circle.umd.js' },
      '@angular2-material/radio': { main: 'radio.umd.js' },
      '@angular2-material/sidenav': { main: 'sidenav.umd.js' },
      '@angular2-material/slide-toggle': { main: 'slide-toggle.umd.js' },
      '@angular2-material/slider': { main: 'slider.umd.js' },
      '@angular2-material/tabs': { main: 'tabs.umd.js' },
      '@angular2-material/toolbar': { main: 'toolbar.umd.js' },
      '@angular2-material/tooltip': { main: 'tooltip.umd.js' },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
