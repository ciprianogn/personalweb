import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Media } from './media';

describe('Media', () => {
  let component: Media;
  let fixture: ComponentFixture<Media>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Media],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Media);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
