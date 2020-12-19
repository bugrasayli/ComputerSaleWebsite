import { TestBed } from '@angular/core/testing';

import { RamServiceService } from './ram-service.service';

describe('RamServiceService', () => {
  let service: RamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
