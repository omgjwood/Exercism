function (year) {
    var leap = year;
    
if ( year % 4 ===0) {
    return ture;
} else if (year % 100 ===0){
    return false;
} else if (year % 400 ===0){
    return ture
} else{
    return false
}
    
}
