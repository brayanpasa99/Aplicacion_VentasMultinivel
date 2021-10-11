import { TestBed } from '@angular/core/testing';

import { IdentificationTypesService } from './identification-types.service';

describe('IdentificationTypesService', () => {
  let service: IdentificationTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
