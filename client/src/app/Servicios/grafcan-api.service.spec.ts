/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrafcanApiService } from './grafcan-api.service';

describe('Service: GrafcanApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrafcanApiService]
    });
  });

  it('should ...', inject([GrafcanApiService], (service: GrafcanApiService) => {
    expect(service).toBeTruthy();
  }));
});
