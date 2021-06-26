import { TestBed } from '@angular/core/testing';

import { Pogoda } from './pogoda';

describe('PogodynkaKlientService', () => {
  let service: Pogoda;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pogoda);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
