import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('should create the SearchComponent', () => {

    expect(component).toBeTruthy();
  });
  describe('#sendSearchResult', () => {
    it('test arr shouldn`t is empty', () => {
      debugger
      let arr = []
      spyOn(component.keywordEmmiter, 'emit').and.callFake(() => {
        arr.push('1')
      })
      component.sendSearchResult()
      fixture.detectChanges();

      expect(arr.length).toBe(1)

    })
  })


})
