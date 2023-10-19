import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenCardComponent } from './replen-card.component';

describe('ReplenCardComponent', () => {
  let component: ReplenCardComponent;
  let fixture: ComponentFixture<ReplenCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenCardComponent]
    });
    fixture = TestBed.createComponent(ReplenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
