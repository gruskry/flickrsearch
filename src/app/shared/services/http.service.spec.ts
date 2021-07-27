import { HttpService } from './http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule],
    })

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpService)
  })

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('returned Observable should match the right data', () => {
    service.getData('car').subscribe( data => {
      expect(data).toBe('ok')
    })
    const req = httpTestingController.expectOne('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e81e21ef77e3a9a6d01ae1c33a5344a1&text=car&format=json&nojsoncallback=1')
    req.flush('ok')

  })
})
