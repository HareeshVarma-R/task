console.log("hi");
class Person{
  /*  constructor(name)
    {
        this.name=name;
    }*/
    walk()
    {
        console.log("walk-person");
    }
}
class Teacher extends Person{
    /*constructor(name,degree)
    {
        super(name);
        this.degree=degree;
    }*/
    teacher(){
        console.log("techer-teacherClass");
    }
}
const teacher=new Teacher();
teacher.walk();