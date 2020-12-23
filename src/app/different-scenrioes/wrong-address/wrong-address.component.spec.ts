import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAddressComponent } from './wrong-address.component';

describe('WrongAddressComponent', () => {
  let component: WrongAddressComponent;
  let fixture: ComponentFixture<WrongAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
