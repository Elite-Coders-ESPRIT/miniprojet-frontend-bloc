import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocComponentComponent } from './bloc-component.component';

describe('BlocComponentComponent', () => {
  let component: BlocComponentComponent;
  let fixture: ComponentFixture<BlocComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
