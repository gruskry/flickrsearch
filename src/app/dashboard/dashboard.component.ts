import { DataModel } from './../shared/models/data.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {
  totalLengthArray: any;
  page: number = 1;
  arrayOfPhotos: [] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

  }

  callRequest(key: string) {
    this.httpService.getData(key).subscribe((data: any) => {
      this.arrayOfPhotos= data.photos?.photo
      this.totalLengthArray = this.arrayOfPhotos?.length
    });
  }
}
