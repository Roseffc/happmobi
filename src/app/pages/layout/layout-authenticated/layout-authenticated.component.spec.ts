import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthenticatedComponent } from './layout-authenticated.component';

describe('LayoutAuthenticatedComponent', () => {
  let component: LayoutAuthenticatedComponent;
  let fixture: ComponentFixture<LayoutAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
