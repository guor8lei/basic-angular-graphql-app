import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphQLModule } from '../graphql.module';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { HttpClientModule } from '@angular/common/http';
import { FieldsOnCorrectTypeRule } from 'graphql';

describe('ExchangeRatesComponent', () => {
  let component: ExchangeRatesComponent;
  let fixture: ComponentFixture<ExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule],
      declarations: [ ExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component.pokemon).toBeFalsy();
  });
  it('should create', () => {
    expect(component.pokemonid).toBeFalsy();
  });
  it('should create', () => {
    expect(component.pokemonmoves).toBeFalsy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'whatAmI');
    expect(component.pokemon).toBeTruthy();
    expect(component.pokemonid).toBeTruthy();
    expect(component.pokemonmoves).toBeTruthy();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'getMoreInfo');
    expect(window.alert).toHaveBeenCalledWith("You havent revealed your pokemon yet!!!");
  });

});
