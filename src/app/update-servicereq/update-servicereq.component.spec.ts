import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicereqComponent } from './update-servicereq.component';

describe('UpdateServicereqComponent', () => {
  let component: UpdateServicereqComponent;
  let fixture: ComponentFixture<UpdateServicereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServicereqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServicereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
