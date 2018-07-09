import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HouseholdComponent } from './household/household.component';
import { SpecialrulesComponent } from './specialrules/specialrules.component';

const appRoutes: Routes = [
    { path: 'specialrules', component: SpecialrulesComponent },
    { path: 'household', component: HouseholdComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'error', component: ErrorpageComponent },
    { path: '**', component: HomepageComponent },

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
