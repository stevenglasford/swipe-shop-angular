import { TestBed } from '@angular/core/testing';

import { InternalInteractionService } from './internal-interaction.service';

describe('InternalInteractionService', () => {
  let service: InternalInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
