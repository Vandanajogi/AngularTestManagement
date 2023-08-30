import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicereqComponent } from './create-servicereq.component';

describe('CreateServicereqComponent', () => {
  let component: CreateServicereqComponent;
  let fixture: ComponentFixture<CreateServicereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServicereqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
