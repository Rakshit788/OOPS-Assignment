class Student{
      constructor(name ,email , course){
        this.name = name ;
        this.email = email ;
        this.course = course ;

      }
      showcourses(){
          console.log(this.name + `enrolled courses : ` +  this.course);
      }
}

class Admission{
 constructor(){
    this.enrolledStudents = []
 }

 enrolledStudent(studentobj){
  if(!this.enrolledStudents.includes(studentobj))
    this.enrolledStudents.push(studentobj)
  console.log(`${studentobj.name  } has been enrolled `);
 }

 assigncourse(studentobj , coursename){
       if(studentobj.course != coursename ){
        studentobj.course = coursename ;

        console.log(`${studentobj.name} has enrolled in ${coursename}`);
       }

 }

 showenrolledStudents(){
  console.log(`Enrolled students :  `);
  this.enrolledStudents.map((obj)=>{
    console.log(`${obj.name} (${obj.email})`);
  })
 }
}


const admissinOffice = new  Admission();



const student1 = new Student('Mithun' , 'Mithun@PeriodicWave.live') ;

const student2 = new Student('Farman ' , 'farman@PeriodicWave.live') ;



admissinOffice.enrolledStudent(student1);
admissinOffice.enrolledStudent(student2) ;

admissinOffice.assigncourse(student1 , 'Full Stack Web Deveelopment') ;
admissinOffice.assigncourse(student2 , 'Data Science Masters') ; 

student1.showcourses();
student2.showcourses();

admissinOffice.showenrolledStudents();


