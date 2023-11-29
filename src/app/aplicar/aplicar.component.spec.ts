import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarComponent } from './aplicar.component';

describe('AplicarComponent', () => {
  let component: AplicarComponent;
  let fixture: ComponentFixture<AplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
