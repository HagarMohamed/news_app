import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsWeDoComponent } from './things-we-do.component';

describe('ThingsWeDoComponent', () => {
  let component: ThingsWeDoComponent;
  let fixture: ComponentFixture<ThingsWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsWeDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
