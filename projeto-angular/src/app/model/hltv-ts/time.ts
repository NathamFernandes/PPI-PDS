import { PlayerTime } from './playertime';
export class Time {
    id: string = '';
    name: string = '';
    logo: string = '';
    ranking: string = '';
    coach: string = '';
    averagePlayerAge: number = 0;
    players: PlayerTime[] = [];
}