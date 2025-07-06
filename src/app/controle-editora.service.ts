import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      new Editora(1, 'Alta Books'),
      new Editora(2, 'Pearson'),
      new Editora(3, 'Addison Wesley')
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.filter(editora => editora.codEditora === codEditora);
    return editoraEncontrada.length > 0 ? editoraEncontrada[0].nome : 'Editora não encontrada';
  }
}