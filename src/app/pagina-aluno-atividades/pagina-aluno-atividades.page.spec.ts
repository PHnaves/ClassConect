import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAlunoAtividadesPage } from './pagina-aluno-atividades.page';

describe('PaginaAlunoAtividadesPage', () => {
  let component: PaginaAlunoAtividadesPage;
  let fixture: ComponentFixture<PaginaAlunoAtividadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunoAtividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
