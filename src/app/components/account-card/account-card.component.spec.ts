import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardComponent } from './budget-card.component';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
