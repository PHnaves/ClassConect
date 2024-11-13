import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlunoAtividadesMaisPage } from './pagina-aluno-atividades-mais.page';

describe('PaginaAlunoAtividadesMaisPage', () => {
  let component: PaginaAlunoAtividadesMaisPage;
  let fixture: ComponentFixture<PaginaAlunoAtividadesMaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunoAtividadesMaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
