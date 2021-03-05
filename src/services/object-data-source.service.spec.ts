import { TestBed } from '@angular/core/testing';

import { ObjectDataSourceService } from './object-data-source.service';

describe('ObjectDataSourceService', () => {
  let service: ObjectDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
