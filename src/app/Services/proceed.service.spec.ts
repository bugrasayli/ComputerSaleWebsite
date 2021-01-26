import { TestBed } from '@angular/core/testing';

import { ProceedService } from './proceed.service';

describe('ProceedService', () => {
  let service: ProceedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
