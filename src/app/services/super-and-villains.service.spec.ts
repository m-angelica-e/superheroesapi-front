import { TestBed } from '@angular/core/testing';

import { SuperAndVillainsService } from './super-and-villains.service';

describe('SuperAndVillainsService', () => {
  let service: SuperAndVillainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAndVillainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
