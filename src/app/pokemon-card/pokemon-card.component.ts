import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon?: { name :string};

  @Input() 
  numero?: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatado}.png`;
  }

  pokemonId() {
    const id = this.leadingZero(this.numero);
    return id;
  }

  pegarNomePokemon() {
    return this.pokemon?.name || '';
  }

  leadingZero(str?: string | number, size = 3): string {
    let s = String(str);
      
    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
