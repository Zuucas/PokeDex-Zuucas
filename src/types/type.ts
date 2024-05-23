
export type pokemon = {
    abilities: abilities[];
    base_experience: number;
    cries: Cries;
    forms: Forms;
    game_indices: gameIndice[];
    height: number;
    moves: MoveDetail[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
    name: string;
    id: number;

};
type abilities = {
    habilidade: habilidadeInfo[];
}

type habilidadeInfo = {
    name: string;
    url:string;
}

type Cries = {
    latest: string;
    legacy: string;
}

type Forms = {
    Form: formInfo[];
}

type formInfo = {
    name: string;
    url: string;
}


type gameIndice = {
    GameIndice: gameIndiceInfo[];
}

type gameIndiceInfo = {
    name: string;
    url: string;
}

interface Move {
    name: string;
    url: string;
} 
interface MoveLearnMethod {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface MoveDetail {
    move: Move;
    version_group_details: VersionGroupDetail[];
}
interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        [generation: string]: {
            [game: string]: {
                back_default: string | null;
                back_female?: string | null;
                back_gray?: string | null;
                back_shiny?: string | null;
                back_shiny_female?: string | null;
                back_transparent?: string | null;
                front_default: string | null;
                front_female?: string | null;
                front_gray?: string | null;
                front_shiny?: string | null;
                front_shiny_female?: string | null;
                front_transparent?: string | null;
            };
        };
    };
}

interface StatDetail {
    name: string;
    url: string;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
}

interface TypeDetail {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: TypeDetail;
}
