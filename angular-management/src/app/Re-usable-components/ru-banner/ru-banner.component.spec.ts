import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuBannerComponent } from './ru-banner.component';

describe('RuBannerComponent', () => {
  let component: RuBannerComponent;
  let fixture: ComponentFixture<RuBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
