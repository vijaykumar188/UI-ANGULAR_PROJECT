import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTabComponent } from './ru-tab.component';

describe('RuTabComponent', () => {
  let component: RuTabComponent;
  let fixture: ComponentFixture<RuTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
