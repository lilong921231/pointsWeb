import { TestBed } from '@angular/core/testing';

import { UserCommonService } from './user-common.service';

describe('UserCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCommonService = TestBed.get(UserCommonService);
    expect(service).toBeTruthy();
  });
});
