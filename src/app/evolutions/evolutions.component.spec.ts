import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionsComponent } from './evolutions.component';

describe('EvolutionsComponent', () => {
  let component: EvolutionsComponent;
  let fixture: ComponentFixture<EvolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('findCP', () => {
  it('should return a maxCP', () => {
    const cp = 841
    let response;
    spyOn(EvolutionsComponent, 'findCP').and.returnValue(of(cp));

    EvolutionsComponent.findCP().subscribe(res => {
      cp = res;
    });

    expect(response).toEqual(cp);
  });
});
