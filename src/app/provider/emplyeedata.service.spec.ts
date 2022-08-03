import { TestBed } from '@angular/core/testing';

import { EmplyeedataService } from './emplyeedata.service';

describe('EmplyeedataService', () => {
  let service: EmplyeedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
