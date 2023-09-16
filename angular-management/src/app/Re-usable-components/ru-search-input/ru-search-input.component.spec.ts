import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuSearchInputComponent } from './ru-search-input.component';

describe('RuSearchInputComponent', () => {
  let component: RuSearchInputComponent;
  let fixture: ComponentFixture<RuSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
