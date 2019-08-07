import { TestBed } from '@angular/core/testing';

import { AngularDemoService } from './angular-demo.service';

describe('AngularDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDemoService = TestBed.get(AngularDemoService);
    expect(service).toBeTruthy();
  });
});
