import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuPaginationComponent } from './ru-pagination.component';

describe('RuPaginationComponent', () => {
  let component: RuPaginationComponent;
  let fixture: ComponentFixture<RuPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
