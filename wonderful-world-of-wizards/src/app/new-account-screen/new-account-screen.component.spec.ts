import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountScreenComponent } from './new-account-screen.component';

describe('NewAccountScreenComponent', () => {
  let component: NewAccountScreenComponent;
  let fixture: ComponentFixture<NewAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
