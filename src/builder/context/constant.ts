import { State } from "./types";

export const initialState: State = {
    items: [
        {
          id:"1",
          label:"Text Input 1",
          children:[
            {
              id:"1.1",
              label:"Text Input 1.1",
              children:[]
            },
            {
              id:"1.2",
              label:"Text Input 1.2",
              children:[
                {
                  id:"1.2.1",
                  label:"Text Input 1.2.1",
                  children:[]
                },
                {
                  id:"1.2.2",
                  label:"Text Input 1.2.2",
                  children:[]
                }
              ]
            },
            {
              id:"1.3",
              label:"Text Input 1.3",
              children:[]
            },
          ]
        },
        {
          id:"2",
          label:"Text Input 2",
          children:[
            {
              id:"2.1",
              label:"Text Input 2.1",
              children:[]
            },
            {
              id:"2.2",
              label:"Text Input 2.2",
              children:[]
            },
            {
              id:"2.3",
              label:"Text Input 2.3",
              children:[]
            },
          ]
        }
      ],
  };