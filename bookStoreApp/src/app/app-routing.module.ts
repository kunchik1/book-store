import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) },
    { path: 'public', component: PublicComponent, loadChildren: () => import('./public/public.module').then(x => x.PublicModule) },
    { path: 'user/:id', component: UserComponent, loadChildren: () => import('./user/user.module').then(x => x.UserModule) },
    { path: '**', component: NotfoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
