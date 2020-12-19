import { TestBed } from '@angular/core/testing';

import { MemoryServiceService } from './memory-service.service';

describe('MemoryServiceService', () => {
  let service: MemoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
