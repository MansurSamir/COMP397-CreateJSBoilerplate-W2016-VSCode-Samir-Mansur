
module objects {
  export  class Student extends Person {
        //INSTANT VARIABLES++++++++++++++++++++++++++++++++++++++++
        private _studentNumber: number;
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++
        constructor(name: string, studentNumber: number) {
            super(name);
            this._studentNumber = studentNumber;
        }
        //PUBLIC METHODS
        public studies(): void {
            console.log(this._name + " is studying");
        }

    }
}