import { CreatePokemonDto } from "./create-pokemon.dto"


describe('create-pokemon.dto', () => {
    it('should not validate with empty values ', () => {
        const pokemon = new CreatePokemonDto();
        pokemon.name = '';
        pokemon.type = '';

    })
})