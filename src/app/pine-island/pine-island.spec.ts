import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineIsland } from './pine-island';

describe('PineIsland', () => {
  let component: PineIsland;
  let fixture: ComponentFixture<PineIsland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PineIsland]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PineIsland);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
