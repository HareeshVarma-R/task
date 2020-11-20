import Person from "./person.js";
export class Teacher extends Person{
    

    teache(){
        console.log("techer-class-method");
    }
}
const t=new Teacher();
t.walk();