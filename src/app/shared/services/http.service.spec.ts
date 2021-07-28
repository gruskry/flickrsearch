import { DataModel } from './../models/data.model';
import { HttpService } from './http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


describe('HttpService', () => {
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule],
    })

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })



  it('#getData should return testData',  () => {
    const testData: DataModel = {
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

    service.getData('car').subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(service.setQueryParams('car'));
    req.flush(testData);
  })

  it("#getData should throw error", () => {
    let error: string = '';

    service.getData('car').subscribe(null, e => {
      error = e;
    });

    const req = httpMock.expectOne(service.setQueryParams('car'));
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
    console.log(error)
    expect(error).toBe('Error data. Network error ');
  });
})
