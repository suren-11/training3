import { TestBed } from '@angular/core/testing';

import { SubjectStreamService } from './subject-stream.service';

describe('SubjectStreamService', () => {
  let service: SubjectStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
