import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensDetalhesComponent } from './itens-detalhes.component';

describe('ItensDetalhesComponent', () => {
  let component: ItensDetalhesComponent;
  let fixture: ComponentFixture<ItensDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
