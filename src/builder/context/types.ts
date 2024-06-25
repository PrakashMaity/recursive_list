import { ReactNode } from "react";

export type Item = {
  id:string,
  label:ReactNode,
  children:Item[]
  };
  
  export type Action =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'MODIFY_ITEM'; payload: Item[] }
    | { type: 'DELETE_ITEM'; payload:string };
  
  export type State = {
    items: Item[];
  };
  
 
  