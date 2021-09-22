import { TestBed } from '@angular/core/testing';

import { VaccinationTypeService } from './vaccination-type.service';

describe('VaccinationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccinationTypeService = TestBed.get(VaccinationTypeService);
    expect(service).toBeTruthy();
  });
});
