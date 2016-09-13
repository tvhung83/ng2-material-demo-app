import { Component } from '@angular/core';

@Component({
		moduleId: module.id,
    selector: 'app1',
  	styleUrls: ['app.component.css'],
    template: `
				<md-toolbar color="primary">
					[App 1] Book list
					<span class="app-toolbar-filler"></span>
				</md-toolbar>

				<div class="app-content">
					<book-list></book-list>
				</div>
    `
})
export class AppComponent { }
