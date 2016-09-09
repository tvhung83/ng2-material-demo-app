/**
 * Created by hungnguyen on 9/9/16.
 */

import { Component } from '@angular/core';
import { OVERLAY_PROVIDERS, MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'book-list',
  providers: [ OVERLAY_PROVIDERS, MdUniqueSelectionDispatcher, MdIcon, MdIconRegistry ],
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
}
