var cohort = ["Douglas H", "Sophie K", "Vivian C", "Fer M", "1", "2", "20"];

//the number of items in the array
console.log('cohort.length', cohort.length);

console.log('index of Fer M', cohort.indexOf("Fer M"));

console.log('get fer', cohort[cohort.indexOf('Fer M')]);




for (var index = 0; index < cohort.length; index++) {
    console.log('cohort[index] ' + index, cohort[index]);
}

//forEach with callBack functions
cohort.forEach(function(element, index, array) {
    console.log('element ', element);
    console.log(index);
    console.log(array);
})
