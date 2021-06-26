import { TestBed } from '@angular/core/testing';

import { PogodynkaMainService } from './pogodynka-main.service';

describe('PogodynkaMainService', () => {
  let service: PogodynkaMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PogodynkaMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
