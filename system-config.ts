/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/

const components = [
	'core',
  'button',
  'button-toggle',
  'card',
  'checkbox',
  'dialog',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slider',
  'slide-toggle',
  'tabs',
  'toolbar',
  'tooltip',
];


/** User packages configuration. */
const packages: any = {
	app: { main: './main.js' },
  // Set the default extension for the root package, because otherwise the demo-app can't
  // be built within the production mode. Due to missing file extensions.
  '.': {
    defaultExtension: 'js'
  }
};
components.forEach(name => {
  packages[`@angular2-material/${name}`] = {
    main: `${name}.umd.js`
  };
});


////////////////////////////////////////////////////////////////////////////////////////////////
const angularPackages = {
  // Angular specific barrels.
  '@angular/core': { main: 'bundles/core.umd.js'},
  '@angular/common': { main: 'bundles/common.umd.js'},
  '@angular/compiler': { main: 'bundles/compiler.umd.js'},
  '@angular/http': { main: 'bundles/http.umd.js'},
  '@angular/forms': { main: 'bundles/forms.umd.js'},
  '@angular/router': { main: 'bundles/router.umd.js'},
  '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js'},
  '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js'}
};

const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',
	'angular2-in-memory-web-api'
];

const _systemConfig: any = angularPackages;
barrels.forEach((barrelName: string) => {
  _systemConfig[barrelName] = { main: 'index.js' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
	paths: {
		// paths serve as alias
		'npm:': 'node_modules/'
	},
  map: {
    // our app is within the app folder
    app: 'app',
		
		// angular
    '@angular': 'npm:@angular',
    '@angular2-material': 'npm:@angular2-material',

    // other libraries
    'rxjs':                       'npm:rxjs',
    'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api'
  },
  packages: _systemConfig
});

// Apply the user's configuration.
System.config({ packages });

