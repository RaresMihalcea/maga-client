import { TestBed } from '@angular/core/testing';

import { ActiveYearService } from './active-year.service';

describe('ActiveYearService', () => {
  let service: ActiveYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
