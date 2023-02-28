import { TestBed } from '@angular/core/testing';

import { CorreoApiSendinblueService } from './correo-api-sendinblue.service';

describe('CorreoApiSendinblueService', () => {
  let service: CorreoApiSendinblueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorreoApiSendinblueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
