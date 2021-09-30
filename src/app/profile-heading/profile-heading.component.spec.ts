import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeadingComponent } from './profile-heading.component';

describe('ProfileHeadingComponent', () => {
  let component: ProfileHeadingComponent;
  let fixture: ComponentFixture<ProfileHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
