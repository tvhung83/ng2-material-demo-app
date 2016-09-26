/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/

const components = [
  'all',
  'button',
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
  'button-toggle',
  'tabs',
  'toolbar',
  'tooltip'
];


/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': {
    format: 'cjs',
    main: 'core.umd.js'
  },
	app: { main: './main.js' },
  // Set the default extension for the root package, because otherwise the demo-app can't
  // be built within the production mode. Due to missing file extensions.
  '.': {
    defaultExtension: 'js'
  }
};

// map @angular2-material packages
components.forEach(name => {
  packages[`@angular2-material/${name}`] = {
    format: 'cjs',
    main: `${name}.umd.js`
  };
});


////////////////////////////////////////////////////////////////////////////////////////////////
const coreComponents = [
  'core',
  'common',
  'compiler',
  'http',
  'forms',
  'router',
  'platform-browser',
  'platform-browser-dynamic'
];
// map @angular packages
const _systemConfig: any = {};
coreComponents.forEach(name => {
  _systemConfig[`@angular/${name}`] = { main: `bundles/${name}.umd.js` };
})

const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',
	'angular2-in-memory-web-api',
  ...components
];

barrels.forEach((barrelName: string) => {
  _systemConfig[barrelName] = { main: 'index' };
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

