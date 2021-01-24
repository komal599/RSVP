import { TestBed } from '@angular/core/testing';

import { TabledataServiceService } from './tabledata-service.service';

describe('TabledataServiceService', () => {
  let service: TabledataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabledataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
