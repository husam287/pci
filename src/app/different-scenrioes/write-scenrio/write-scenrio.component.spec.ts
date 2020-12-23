import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteScenrioComponent } from './write-scenrio.component';

describe('WriteScenrioComponent', () => {
  let component: WriteScenrioComponent;
  let fixture: ComponentFixture<WriteScenrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteScenrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteScenrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
