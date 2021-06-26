import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PogodynkaComponent } from './pogodynka.component';

describe('PogodynkaComponent', () => {
  let component: PogodynkaComponent;
  let fixture: ComponentFixture<PogodynkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PogodynkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PogodynkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
