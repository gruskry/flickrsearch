import { SearchComponent } from './../shared/search/search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './../shared/services/http.service';
import { ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs'
import { HttpClientModule } from '@angular/common/http';



describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let fixtureSearch: ComponentFixture<SearchComponent>
  let component: DashboardComponent;
  let searchComponent: SearchComponent;
  let service: HttpService;
  let spy: jasmine.Spy;
  let mockData: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ DashboardComponent,SearchComponent ],
      providers: [HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    fixtureSearch = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance;
    searchComponent = fixtureSearch.componentInstance
    service = fixture.debugElement.injector.get(HttpService)
    mockData = {
      id: '2',
      description: 'this photo',
    }
    spy = spyOn(service, 'getData').and.returnValue(of(mockData))

  })

  it('should create the DashboardComponent', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should arrayOfPhotos is empty', () => {

    if(!component.arrayOfPhotos.length) {
      expect(component.arrayOfPhotos.length).toBe(0)
    }
  })

  it('should call httpService', () => {
    component.callRequest('car');
    expect(spy.calls.any()).toBeTruthy()
  })
  it('callRequest fn should be called with SearchComponent Input value', () => {
    spyOn(component, 'callRequest')
    const nativeElement = fixtureSearch.nativeElement;
    const button = nativeElement.querySelector('.search-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.callRequest(searchComponent.value)
    expect(component.callRequest).toHaveBeenCalledWith(searchComponent.value)
  })
});
