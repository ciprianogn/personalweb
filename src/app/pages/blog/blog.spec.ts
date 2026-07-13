import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Blog } from './blog';
import { CmsService } from './blog.service';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog],
      providers: [
        provideRouter([]),
        {
          provide: CmsService,
          useValue: {
            listRecent: () => of([]),
            featuredImage: () => null,
            featuredAlt: () => '',
            estimateReadingTime: () => '1 min de lectura',
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
