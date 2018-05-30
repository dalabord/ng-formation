import { Matter } from "./matter";

export interface Student {
    name: string;
    age: number;
    matter?: Matter[];
}