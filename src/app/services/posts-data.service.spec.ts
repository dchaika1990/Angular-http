import { TestBed, inject } from '@angular/core/testing';

import { PostsDataService } from './posts-data.service';

describe('PostsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsDataService]
    });
  });

  it('should be created', inject([PostsDataService], (service: PostsDataService) => {
    expect(service).toBeTruthy();
  }));
});
