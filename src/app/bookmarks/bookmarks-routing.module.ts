import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookmarksComponent } from "./bookmarks.component";

const routes = [
    {path: '', children: [ 
        {path: '', component: BookmarksComponent}
    ]},
]

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookmarksRoutingModule {}