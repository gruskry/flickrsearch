import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/shared.module";
import { DashboardRoutingModule } from "./dasboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule  ({
    imports: [SharedModule, DashboardRoutingModule, NgxPaginationModule],
    exports: [NgxPaginationModule],
    declarations:[DashboardComponent],
})
export class DashboardModule {}
