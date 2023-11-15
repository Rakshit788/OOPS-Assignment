class Temperature {
    constructor(){
       this.celcius =`0 C`;
       this.Fahrenheit = `32 F` ; 

    }

    get getCelsius (){
        return this.celcius ;
    } ; 
    set setCelcius  (value) {
           if(typeof value == 'number'){
            this.celcius = value ;
            this.Fahrenheit = (value *9/5 ) +32 ;
           }
           else{
            console.log(`Please enter a valid number`);
           }
    } ; 
    get getFahrenheit (){
        return this.Fahrenheit ;
    } ; 
    set setFahrenheit  (value) {
           if(typeof value == 'number'){
            this.Fahrenheit = value ;
            this.celciust = (value -32) * 5/9 ;
           }
           else{
            console.log(`Please enter a valid number`);
           }
    } ; }

temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`); 
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`); 

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); 

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); 
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); 