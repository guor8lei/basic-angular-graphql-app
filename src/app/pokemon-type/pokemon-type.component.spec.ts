import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonTypeComponent } from './pokemon-type.component';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        GraphQLModule, 
        HttpClientModule
      ],
      declarations: [ PokemonTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitted should start off false', () => {
    expect(component.submitted).toBeFalsy();
  });

  it('there should be a pokemon name generated', () => {
    expect(component.pokeName).toBeTruthy();
  });
});
