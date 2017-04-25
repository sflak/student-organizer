import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketDayComponent } from './bucket-day.component';

describe('BucketDayComponent', () => {
  let component: BucketDayComponent;
  let fixture: ComponentFixture<BucketDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
