import { Routes } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { RecuperarPassComponent } from './components/autenticacion/recuperar-pass/recuperar-pass.component';
import { ForoComponent } from './components/foro/foro.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./components/shared/home/home.component').then(m => m.HomeComponent) },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegistroComponent },
    { path: "recuperar-contraseña", component: RecuperarPassComponent },
    { path: "foro", component: ForoComponent },
    { path: "perfil", component: PerfilComponent },

    { path:"**", redirectTo: "foro" }
];
