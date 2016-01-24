module objects {
   export class Person {
        //INSTANT VARIABLES++++++++++++++++++++++++++++++++++++++++
        protected _name: string;
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++
        constructor(name: string) {
            this._name = name;
        }
        //PUBLIC METHODS
        public speaks(): void {
            console.log(this._name + " says hello");
        }
    }
}