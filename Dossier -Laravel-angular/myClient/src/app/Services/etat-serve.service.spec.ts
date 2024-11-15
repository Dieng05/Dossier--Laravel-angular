import { TestBed } from '@angular/core/testing';

import { EtatServeService } from './etat-serve.service';

describe('EtatServeService', () => {
  let service: EtatServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
