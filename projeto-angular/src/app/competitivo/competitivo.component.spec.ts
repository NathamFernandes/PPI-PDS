import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitivoComponent } from './competitivo.component';

describe('CompetitivoComponent', () => {
  let component: CompetitivoComponent;
  let fixture: ComponentFixture<CompetitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
