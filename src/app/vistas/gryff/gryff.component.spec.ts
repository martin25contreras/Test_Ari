import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GryffComponent } from './gryff.component';

describe('GryffComponent', () => {
  let component: GryffComponent;
  let fixture: ComponentFixture<GryffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GryffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
