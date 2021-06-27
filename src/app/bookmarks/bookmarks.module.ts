import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { SharedModule } from '../shared/shared.module';
import { BookmarksRoutingModule } from './bookmarks-routing.module';


@NgModule({
  imports: [SharedModule, BookmarksRoutingModule],
  exports: [],
  declarations:[BookmarksComponent],
})
export class BookmarksModule { }
