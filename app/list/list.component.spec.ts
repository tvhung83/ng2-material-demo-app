/**
 * Created by hungnguyen on 9/9/16.
 */

/* tslint:disable:no-unused-variable */
import { ListComponent } from './list.component';

import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('ListComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ListComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(ListComponent);
    expect(fixture.componentInstance instanceof ListComponent).toBe(true, 'should create ListComponent');
  });

  it('should have expected <ul> text', () => {
    let fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();

    let ul = fixture.debugElement.query(el => el.name === 'ul').nativeElement;  // it works

    ul = fixture.debugElement.query(By.css('ul')).nativeElement;            // preferred

    // let li = ul.debugElement.query(el => el.name === 'li').nativeElement;            // preferred

    expect(ul.innerText).toMatch(/List/i, '<ul> should contain "List"');
  });
});

