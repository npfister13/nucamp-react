class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    };
};

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    };
    registerStudent(student) {
        // if(!this.students[student.email].includes(student.email)){
        if (this.students.filter(element => element.email === student.email)){
        // if (!this.students.find(element => element.email === student.email)){
            this.students.push(student);
            console.log(`Added in student with email ${student.email} registered`);
        }
        else{
            console.log(`Student with email ${student.email} already exists`)
        }
    }
}
