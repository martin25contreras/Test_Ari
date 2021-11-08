import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuffComponent } from './huff.component';

describe('HuffComponent', () => {
  let component: HuffComponent;
  let fixture: ComponentFixture<HuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
