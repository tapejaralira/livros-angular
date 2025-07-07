import { Routes } from '@angular/router';

// Importar os componentes que serão usados nas rotas
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
  {
    path: 'lista',
    component: LivroListaComponent
  },
  {
    path: 'dados',
    component: LivroDadosComponent
  },
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  }
];