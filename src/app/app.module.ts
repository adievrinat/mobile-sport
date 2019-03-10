import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
    {path: 'filter', component: FilterComponent},
    {path: 'main', component: MainComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
