import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBook} from '../../models/book.model';

@Component({
   selector: 'app-selected-book',
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      
   `
})
export class SelectedBookContainer {
   @Input()
   book: IBook;
}
