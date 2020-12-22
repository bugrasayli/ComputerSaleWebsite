import {Brand} from '../Model/brand';
import {graphicCard} from '../Model/graphiccard';
import { memory } from './memory';
import { country } from './country';
import { processor} from './processor';
import { ram } from './ram';
import { detail } from './detail';
import { type } from './type';

export class computer{
    id:number;
    name: string;
    brand: Brand;
    graphicCard : graphicCard;
    memory : memory;
    coutry: country;
    processor:processor;
    ram: ram;
    detail : detail;
    type : type;
    rate: number;
}