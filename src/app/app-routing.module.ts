import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    { path: 'invitations', loadChildren: './invitations/invitations.module#InvitationsPageModule' },
    { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
    { path: 'conferences', loadChildren: './conferences/conferences.module#ConferencesPageModule' },
    { path: 'instructors', loadChildren: './instructors/instructors.module#InstructorsPageModule' },
    { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
