import { TestBed } from '@angular/core/testing';

import { PogodynkaKlientService } from './pogodynka-klient.service';

describe('PogodynkaKlientService', () => {
  let service: PogodynkaKlientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PogodynkaKlientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
