
const age = 10;
const price = 800;
isstudent = false
if(age < 10){
    console.log('Travels Free');
}
else if(isstudent){
    console.log(price / 2);
}
else if(age >= 60){
    const payamount = price * 15 / 100
    console.log(payamount)
}
else{
    console.log(price)
}