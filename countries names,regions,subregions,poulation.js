const a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.responseType="json";
a.onload=function displayResult()
{
    const countries=a.response;
    for(let index = 0; index<= countries.length; index++){
        console.log( +index+1 ,` the country name is ${countries[index].name.common} 
    the country sub region is ${countries[index].subregion}
    the country region is ${countries[index].region}
    the country population ${countries[index].population}`);
    
}
}