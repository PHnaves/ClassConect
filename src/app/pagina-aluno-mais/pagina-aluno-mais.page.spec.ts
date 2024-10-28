import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlunoMaisPage } from './pagina-aluno-mais.page';

describe('PaginaAlunoMaisPage', () => {
  let component: PaginaAlunoMaisPage;
  let fixture: ComponentFixture<PaginaAlunoMaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunoMaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
