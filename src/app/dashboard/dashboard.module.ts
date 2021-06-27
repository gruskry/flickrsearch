import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dasboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule  ({
    imports: [SharedModule, DashboardRoutingModule],
    exports: [],
    declarations:[DashboardComponent],
}) 
export class DashboardModule {}