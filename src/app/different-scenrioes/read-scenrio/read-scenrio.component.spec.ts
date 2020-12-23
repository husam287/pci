import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadScenrioComponent } from './read-scenrio.component';

describe('ReadScenrioComponent', () => {
  let component: ReadScenrioComponent;
  let fixture: ComponentFixture<ReadScenrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadScenrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadScenrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
