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
  { path: 'guests', pathMatch: 'full', loadChildren: './guests/guests.module#GuestsPageModule' },
  { path: 'courses', pathMatch: 'full', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'conferences', pathMatch: 'full', loadChildren: './conferences/conferences.module#ConferencesPageModule' },
  { path: 'instructors', pathMatch: 'full', loadChildren: './instructors/instructors.module#InstructorsPageModule' },
  { path: 'partners', pathMatch: 'full', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
  { path: 'contact', pathMatch: 'full', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'login', pathMatch: 'full', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'forgot', pathMatch: 'full', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'registration', pathMatch: 'full', loadChildren: './registration/registration.module#RegistrationPageModule' },
  {
    path: 'single-entry',
    loadChildren: () => import('./single-entry/single-entry.module').then(m => m.SingleEntryPageModule)
  },
  {
    path: 'verify-email-address',
    pathMatch: 'full',
    loadChildren: () => import('./verify-email-address/verify-email-address.module').then(m => m.VerifyEmailAddressPageModule)
  },
  {
    path: 'organizers',
    pathMatch: 'full',
    loadChildren: () => import('./organizers/organizers.module').then(m => m.OrganizersPageModule)
  },
  {
    path: 'participate',
    pathMatch: 'full',
    loadChildren: () => import('./participate/participate.module').then(m => m.ParticipatePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
