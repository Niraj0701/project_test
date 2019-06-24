
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-search',
   template: `
    <mat-card>
      <mat-card-title>Cherchez Ici</mat-card-title>
      <mat-card-content>
         <mat-form-field class="example-full-width">
            <input matInput placeholder="Nom du livre" value="{{inputString }}" (keyup)="search.emit($event.target.value)">
         </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
   styles: [`
    mat-card-title,
    mat-card-content {
      display: flex;
      justify-content: center;
    }
  `]
})
export class AppSearchComponent {
   @Input() inputString = '';
   @Output() search = new EventEmitter<string>();
}
