import { TestBed } from '@angular/core/testing';

import { NgxRmCustomCssService } from './ngx-rm-custom-css.service';

describe('NgxRmCustomCssService', () => {
  let service: NgxRmCustomCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRmCustomCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
