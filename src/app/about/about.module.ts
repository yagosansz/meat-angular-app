import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    { path: '', component: AboutComponent }
]

@NgModule({
    declarations: [AboutComponent], // Lists all components that must be inside this module
    imports: [RouterModule.forChild(ROUTES)] // forChild: this is a child module!
})

export class AboutModule {}