// For Loops

for (let i = 0; i <= 10; i++)
{
    if(i === 3)
    {
        console.log('Golden Number');
        continue;
    }

    if (i === 9){
        break;
    }

    console.log(i);
}

// While Loops

let i = 0;
while(i < 10)
{
    console.log('while loop : ' + i);
    i++;
}

// Do While 

let j = 3;
do{
    console.log(j);
    j++;
} while (j < 20);


// loop through Array
const student = ['hamza','ali','adam','sara','abde'];

for (let i = 0 ; i < student.length; i++){
    console.log('ID:'+ (i+1) +' '+student[i]);
}

// forEach
student.forEach(function (elements){
    console.log(elements.toLocaleUpperCase());
})

// Map
const roles = [
    {id:1, role:"admin"},
    {id:2, role:"editor"},
    {id:3, role:"visitor"},
]

const ids = roles.map(function (ids){
    return ids.id;
})
console.log(ids);

const role = roles.map(function (ids){
    return ids.role;
})
console.log(role);


// for in Loop

const user = {
    name : 'hamza',
    age : 29,
    email: 'hamza@gmail.com',
};

for (att in user)
{
    console.log(user[att]);
}