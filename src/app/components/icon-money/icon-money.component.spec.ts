import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMoneyComponent } from './icon-money.component';

describe('IconMoneyComponent', () => {
  let component: IconMoneyComponent;
  let fixture: ComponentFixture<IconMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
