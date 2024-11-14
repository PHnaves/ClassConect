import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlunoMaisDadosPage } from './pagina-aluno-mais-dados.page';

describe('PaginaAlunoMaisDadosPage', () => {
  let component: PaginaAlunoMaisDadosPage;
  let fixture: ComponentFixture<PaginaAlunoMaisDadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunoMaisDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
