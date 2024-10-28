import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlunoMateriaPage } from './pagina-aluno-materia.page';

describe('PaginaAlunoMateriaPage', () => {
  let component: PaginaAlunoMateriaPage;
  let fixture: ComponentFixture<PaginaAlunoMateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunoMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
