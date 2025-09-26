import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainMeet } from './captain-meet';

describe('CaptainMeet', () => {
  let component: CaptainMeet;
  let fixture: ComponentFixture<CaptainMeet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptainMeet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptainMeet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
