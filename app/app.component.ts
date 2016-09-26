import { Component } from '@angular/core';

@Component({
		moduleId: module.id,
		selector: 'app1',
		styleUrls: ['app.component.css'],
		template: `
			<nav>
				<a routerLink="/books" routerLinkActive="active">Books</a>
			</nav>
			
			<!-- Routed views go here -->
			<router-outlet></router-outlet>
    `
})
export class AppComponent { }
