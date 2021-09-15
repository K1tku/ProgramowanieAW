import { TestBed } from '@angular/core/testing';

import { NoteClientService } from './note-client.service';

describe('NoteClientService', () => {
  let service: NoteClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
