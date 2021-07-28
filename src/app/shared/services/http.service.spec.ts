import { DataModel } from './../models/data.model';
import { HttpService } from './http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, async } from '@angular/core/testing';


describe('HttpService', () => {
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService, {useValue: {getData() {return undefined} }}],
      imports: [HttpClientTestingModule],
    })

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpService)
  })

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })



  it('#getData',  () => {
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
      expect(data.photos?.photo.length).toBe(1);
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(service.setQueryParams('car'));

    expect(req.request.method).toBe('GET');
    req.flush(testData);
  })
})
