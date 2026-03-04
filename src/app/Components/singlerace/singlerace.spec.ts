import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlerace } from './singlerace';

describe('Singlerace', () => {
  let component: Singlerace;
  let fixture: ComponentFixture<Singlerace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlerace],
    }).compileComponents();

    fixture = TestBed.createComponent(Singlerace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
