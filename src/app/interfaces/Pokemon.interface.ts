export interface Pokemon{
    name:string;
    base_experience:number;
    height:number;
    weight:number;
    id:number;
    sprites:{
        front_default:string;
        front_shiny:string;
    }
}