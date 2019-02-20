import { TestBed, async, inject } from '@angular/core/testing';

import { UserIphoneGuard } from './user-iphone.guard';

describe('UserIphoneGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIphoneGuard]
    });
  });

  it('should ...', inject([UserIphoneGuard], (guard: UserIphoneGuard) => {
    expect(guard).toBeTruthy();
  }));
});
