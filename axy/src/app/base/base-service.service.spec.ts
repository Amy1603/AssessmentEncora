import { TestBed } from '@angular/core/testing';

import { BaseService } from './base-service.service';

describe('BaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
