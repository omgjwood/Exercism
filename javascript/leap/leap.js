/*var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {

    var name = input || 'World';
    return  'Hello, ' + name + '!';
};

module.exports = HelloWorld; */




function (year) { 
    var leap = year;
    
if ( year % 4 ===0) {
    return true;
} else if (year % 100 ===0){
    return false;
} else if (year % 400 ===0){
    return true;
} else{
    return false
}
    
}
module.exports = Year;