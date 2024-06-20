import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/menu',
    pathMatch: 'full' // esta se agrega porque está redireccionando la ruta
    },
    {
    path: 'menu',
    component:NavigationComponent
    },
    {
    path: 'notas',
    component: NotasComponent
    },
    {
    path: 'lista',
    component:ListaComponent
    },
    {
    path: 'edit/:id',
    component: NotasComponent
    },
    {
      path: '**',
      redirectTo: 'menu',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
