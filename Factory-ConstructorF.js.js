    
function showAddress(street, city, zipCode){
       return {
        street,
        city, 
        zipCode
       };
    }

let firstAddress = showAddress('Oxford', 'London', 715200);
console.log(firstAddress);

function CreateAddress(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};

let thisAddress = new CreateAddress('Oxford', 'London', 715200);
console.log(thisAddress)