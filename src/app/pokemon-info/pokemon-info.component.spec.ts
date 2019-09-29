import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphQLModule } from '../graphql.module';
import { PokemonInfoComponent } from './pokemon-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule, FormsModule],
      declarations: [ PokemonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should equal', () => {
    component.onClickMe()
    expect(component.userInput).toEqual("Pikachu");
  });
});
