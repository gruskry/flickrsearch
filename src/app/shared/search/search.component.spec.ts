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
  describe('#keywordEmmiter', () => {
    it('emitter should call with value', () => {

      spyOn(component.keywordEmmiter, 'emit');

      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('.search-button');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.keywordEmmiter.emit).toHaveBeenCalledWith(component.value)

    })

    it('should emit value ', () => {
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('.search-button');
      const input = nativeElement.querySelector('.search-input');
      const value = input.getAttribute('value')

      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.keywordEmmiter.emit(value)).toBe(component.value)
    })
  })


})
