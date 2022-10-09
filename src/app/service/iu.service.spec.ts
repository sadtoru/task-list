import { TestBed } from '@angular/core/testing';

import { IuService } from './iu.service';

describe('IuService', () => {
  let service: IuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
