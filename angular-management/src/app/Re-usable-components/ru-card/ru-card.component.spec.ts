import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuCardComponent } from './ru-card.component';

describe('RuCardComponent', () => {
  let component: RuCardComponent;
  let fixture: ComponentFixture<RuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
