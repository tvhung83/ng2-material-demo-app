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

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      '@angular2-material':         'npm:@angular2-material'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      // angular2-material bundles
      '@angular2-material/button': { main: 'button.umd.js', format: 'cjs' },
      '@angular2-material/button-toggle': { main: 'button-toggle.umd.js', format: 'cjs' },
      '@angular2-material/card': { main: 'card.umd.js', format: 'cjs' },
      '@angular2-material/core': { main: 'core.umd.js', format: 'cjs' },
      '@angular2-material/checkbox': { main: 'checkbox.umd.js', format: 'cjs' },
      '@angular2-material/grid-list': { main: 'grid-list.umd.js', format: 'cjs' },
      '@angular2-material/icon': { main: 'icon.umd.js', format: 'cjs' },
      '@angular2-material/input': { main: 'input.umd.js', format: 'cjs' },
      '@angular2-material/list': { main: 'list.umd.js', format: 'cjs' },
      '@angular2-material/menu': { main: 'menu.umd.js', format: 'cjs' },
      '@angular2-material/progress-bar': { main: 'progress-bar.umd.js', format: 'cjs' },
      '@angular2-material/progress-circle': { main: 'progress-circle.umd.js', format: 'cjs' },
      '@angular2-material/radio': { main: 'radio.umd.js', format: 'cjs' },
      '@angular2-material/sidenav': { main: 'sidenav.umd.js', format: 'cjs' },
      '@angular2-material/slide-toggle': { main: 'slide-toggle.umd.js', format: 'cjs' },
      '@angular2-material/slider': { main: 'slider.umd.js', format: 'cjs' },
      '@angular2-material/tabs': { main: 'tabs.umd.js', format: 'cjs' },
      '@angular2-material/toolbar': { main: 'toolbar.umd.js', format: 'cjs' },
      '@angular2-material/tooltip': { main: 'tooltip.umd.js', format: 'cjs' },
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
