import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWavesComponent } from './data-waves.component';

describe('DataWavesComponent', () => {
  let component: DataWavesComponent;
  let fixture: ComponentFixture<DataWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
