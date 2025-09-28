import { TestBed } from '@angular/core/testing';

import { FormType } from './form-type';

describe('FormType', () => {
  let service: FormType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
