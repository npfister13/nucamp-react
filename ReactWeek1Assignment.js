class Student{
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }

}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (!this.students.find(element => element.email === student.email)){
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`)
        }
        else{
            console.log(`The student ${student.email} is already registered`);
        }
        return this.students;
    }

}