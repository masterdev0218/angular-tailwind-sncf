import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StationService } from './station.service';

describe('StationService', () => {
  let service: StationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
