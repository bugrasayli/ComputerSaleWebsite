import { TestBed } from '@angular/core/testing';

import { ComputerserviceService } from './computerservice.service';

describe('ComputerserviceService', () => {
  let service: ComputerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
