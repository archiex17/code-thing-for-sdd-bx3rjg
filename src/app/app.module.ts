import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {PeopleService} from './services/people.service';


// COMPONENTS
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { AddLicenceComponent } from './add-licence/add-licence.component';
import { FilesComponent } from './files/files.component';
import { SettingsComponent } from './settings/settings.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';




// ROUTING
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'add', component: AddLicenceComponent},
    {path: 'files', component: FilesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'vehicle', component: VehicleComponent},
    {path: 'vehiclelist', component: VehiclelistComponent},
    {path: '**', component: HomeComponent},
];


// MODULES
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        // ROUTING
        RouterModule.forRoot(
            appRoutes,
            //  { enableTracing: true } // <-- debugging purposes only
        )
    ],  // end imports
    declarations: [AppComponent, HomeComponent, AddLicenceComponent, FilesComponent, SettingsComponent, VehicleComponent, VehiclelistComponent],
    bootstrap: [AppComponent],
    providers: [PeopleService],
    entryComponents: [HomeComponent]
})
export class AppModule {
}

