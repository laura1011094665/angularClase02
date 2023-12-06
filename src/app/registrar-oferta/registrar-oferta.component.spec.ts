import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOfertaComponent } from './registrar-oferta.component';

describe('RegistrarOfertaComponent', () => {
  let component: RegistrarOfertaComponent;
  let fixture: ComponentFixture<RegistrarOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarOfertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
