import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionTableComponent } from './reception-table.component';

describe('ReceptionTableComponent', () => {
  let component: ReceptionTableComponent;
  let fixture: ComponentFixture<ReceptionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
