import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdListModule} from '@angular2-material/list';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdInputModule} from '@angular2-material/input';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';
import {MdRippleModule, PortalModule, OverlayModule} from '@angular2-material/core';
import {MdMenuModule} from '@angular2-material/menu';

import { AppComponent }  from './app.component';
import { ListComponent }  from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    PortalModule,
    OverlayModule

  ],
  declarations: [ AppComponent, ListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
