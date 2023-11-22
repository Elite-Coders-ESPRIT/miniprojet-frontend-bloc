import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocFormComponent } from './bloc-form.component';

describe('BlocFormComponent', () => {
  let component: BlocFormComponent;
  let fixture: ComponentFixture<BlocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
