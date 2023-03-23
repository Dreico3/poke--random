import { Pokemon } from "./Pokemon.interface";

export interface Page {
    loading: boolean,
    count: number;
    next: null | string;
    previous: null | string;
    results: [
        { name: string, url: string }
    ];
    data: Pokemon[];
    moment: null | string;
    numbrePage: number | null;
    show:boolean|null;
}