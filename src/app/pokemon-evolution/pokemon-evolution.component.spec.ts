import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonEvolutionComponent } from './pokemon-evolution.component';

describe('PokemonEvolutionComponent', () => {
  let component: PokemonEvolutionComponent;
  let fixture: ComponentFixture<PokemonEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        GraphQLModule, 
        HttpClientModule
      ],
      declarations: [ PokemonEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('there should be a pokemon name generated', () => {
    expect(component.pokeName).toBeTruthy();
  });
});
