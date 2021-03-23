import { TestBed } from '@angular/core/testing';

import { ComposerDetailService } from './composer-detail.service';

describe('ComposerDetailService', () => {
  let service: ComposerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
