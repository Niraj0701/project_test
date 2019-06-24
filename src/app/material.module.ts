import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
   MatButtonModule,
   MatCardModule,
   MatCheckboxModule, MatGridListModule,
   MatIconModule, MatInputModule,
   MatListModule, MatProgressSpinnerModule, MatRadioModule,
   MatSidenavModule,
   MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

const materialComponents = [
   BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
   MatToolbarModule, MatIconModule, MatSidenavModule,
   MatListModule, MatCardModule, MatInputModule,
   MatProgressSpinnerModule, MatGridListModule, MatRadioModule,
   ScrollDispatchModule
];

@NgModule({
   imports: materialComponents,
   exports: materialComponents
})
export class AppMaterialModule {
}
