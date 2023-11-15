class Shape{
    
  calculateara(){};
 calculatePerimeter(){} ;
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius ;
    }
calculateara(){
    return Math.PI*this.radius**2;
}
calculatePerimeter(){
    return 2*Math.PI*this.radius;
}
  
}

class Rectangle extends Shape{
    constructor(length, breath){
        super();
        this.length = length ;
        this.breath = breath ;

    }
calculateara(){
    return this.length*this.breath;
}
calculatePerimeter(){
    return 2*(this.length+ this.breath);
}
  
}


const circle =  new  Circle(5);
console.log(`Circle - Area: ${circle.calculateara()} , Perimeter: ${circle.calculatePerimeter()}`);


const rectangle =  new Rectangle(4,6);
console.log(`Circle - Area: ${rectangle.calculateara()} , Perimeter: ${rectangle.calculatePerimeter()}`);
``