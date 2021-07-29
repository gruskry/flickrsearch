import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataModel } from './../shared/models/data.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './../shared/services/http.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';



describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: HttpService

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ DashboardComponent ],
      providers: [ {provide: HttpService, useValue: {}} ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(HttpService);
  })
  describe('#callRequest', () =>  {
    it('arrayOfPhotos should to equal changesData', () => {
      const response: DataModel = {
        photos: {
          page: 1,
          pages: 1,
          perpage: 1,
          total: 2,
          photo: [
            { farm: 1,
              id: '1',
              isfamily: 1,
              isfriend: 1,
              ispublic: 1,
              owner: 'string',
              secret: 'string',
              server: 'string',
              title: 'string',
            },
          ]
        },
        stat: 'strings'
      }
      const changesData = [{
      farm: 1,
      id: '1',
      isfamily: 1,
      isfriend: 1,
      ispublic: 1,
      owner: 'string',
      secret: 'string',
      server: 'string',
      title: 'string',
      }];

      spyOn(service, 'getData').and.returnValue(of(response))

      component.callRequest('car');
      fixture.detectChanges();

      expect(component.arrayOfPhotos).toEqual(changesData)
    })
  })

});
