import { Category } from "./Category";

export interface Product {
    id : number;
    name : string;
    description : string;
    price : number;
    idcategory : Category;
    promotion : boolean;
    newProduct : boolean;
}