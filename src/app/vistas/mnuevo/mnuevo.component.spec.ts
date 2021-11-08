import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnuevoComponent } from './mnuevo.component';

describe('MnuevoComponent', () => {
  let component: MnuevoComponent;
  let fixture: ComponentFixture<MnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
