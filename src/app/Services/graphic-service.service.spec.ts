import { TestBed } from '@angular/core/testing';

import { GraphicServiceService } from './graphic-service.service';

describe('GraphicServiceService', () => {
  let service: GraphicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
