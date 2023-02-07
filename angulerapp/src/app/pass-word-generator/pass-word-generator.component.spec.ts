import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassWordGeneratorComponent } from './pass-word-generator.component';

describe('PassWordGeneratorComponent', () => {
  let component: PassWordGeneratorComponent;
  let fixture: ComponentFixture<PassWordGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassWordGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassWordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
