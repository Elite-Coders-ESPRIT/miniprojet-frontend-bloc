import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationChambreComponent } from './affectation-chambre.component';

describe('AffectationChambreComponent', () => {
  let component: AffectationChambreComponent;
  let fixture: ComponentFixture<AffectationChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
