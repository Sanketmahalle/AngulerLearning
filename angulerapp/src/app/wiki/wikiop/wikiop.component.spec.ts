import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiopComponent } from './wikiop.component';

describe('WikiopComponent', () => {
  let component: WikiopComponent;
  let fixture: ComponentFixture<WikiopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
