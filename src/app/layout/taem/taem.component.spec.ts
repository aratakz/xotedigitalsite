import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaemComponent } from './taem.component';

describe('TaemComponent', () => {
  let component: TaemComponent;
  let fixture: ComponentFixture<TaemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
