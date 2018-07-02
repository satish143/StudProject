import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApexService } from './service/apex.service';
import { ReportService } from './service/report.service';
import { AppService } from './service/app.service';


import {
    MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatAutocompleteModule,
    MatTooltipModule, MatSnackBarModule,
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
        MatGridListModule, MatCardModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule, MatAutocompleteModule
        

    ],
    declarations: [
      
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, 
        MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
        MatGridListModule, MatCardModule, MatAutocompleteModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule

    ],
    providers: []

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApexService,
                AppService, ReportService
            ],
        };
    }
}