import { TimeParcial } from './timeparcial';
export class PlayerComp {
    id: number = 0;
    team: TimeParcial = new TimeParcial;
    image: string = '';
    nickname: string = '';
    age: number = 0;
    rating: number = 0;
    mapsPlayed: number = 0;
    headshots: number = 0;
}