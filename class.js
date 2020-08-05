class Student{
    constructor(sId, sName){
      this.id = sId;
      this.name = sName;
    } 
}

const student1 = new Student(12, "Mithila");
const student2 = new Student(13, "Jorge");

console.log(student1, student2);