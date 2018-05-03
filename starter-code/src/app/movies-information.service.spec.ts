import { TestBed, inject } from '@angular/core/testing';

import { MoviesInformationService } from './movies-information.service';

describe('MoviesInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesInformationService]
    });
  });

  it('should be created', inject([MoviesInformationService], (service: MoviesInformationService) => {
    expect(service).toBeTruthy();
  }));
});
