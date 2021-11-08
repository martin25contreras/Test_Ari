import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlythComponent } from './slyth.component';

describe('SlythComponent', () => {
  let component: SlythComponent;
  let fixture: ComponentFixture<SlythComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlythComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlythComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
