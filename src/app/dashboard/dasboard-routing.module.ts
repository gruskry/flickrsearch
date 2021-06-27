import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes = [
    {path: '', children: [ 
        {path: '', component: DashboardComponent}
    ]},
]

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}