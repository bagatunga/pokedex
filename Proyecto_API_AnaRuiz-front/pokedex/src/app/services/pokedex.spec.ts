import { TestBed } from '@angular/core/testing';

import { PokemonModel } from '../model/pokemon';

describe('Pokemon', () => {
    let service: PokemonModel;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PokemonModel);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
