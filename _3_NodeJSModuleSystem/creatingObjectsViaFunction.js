function Person(name,age,work){
    this.name = name;
    this.age = age;
    this.work = work;
    this.intro = function(){
        console.log(this.name + " " + this.age + " " + this.work);
    }
}
