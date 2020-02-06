import { TestBed } from '@angular/core/testing';

import { InvitatiService } from './invitati.service';

describe('InvitatiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitatiService = TestBed.get(InvitatiService);
    expect(service).toBeTruthy();
  });
});
