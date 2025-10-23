// const firstName = 'temirlan';
// const lastName = 'bekmamatov';
// let age = 21;
// let message = 'Добро пожаловать мой первый сайт';

// console.log(firstName, lastName, age , 'y.o')


// let i = 0 ;


// for (let i = 1; i<=10 ; i++) {
//    console.log (i)
// }
// const users= {
//    temirlan: {
//       age: 21 ,
//       isAdmin: false ,
//       sayHello(name){
//          console.log(`hello${name }`)
//       }
//    },
//    bekbolsun: {
//       age: 21 ,
//       isAdmin: true
//    },
//    emirlan: {
//       age:19 ,
//       isAdmin:true
//    }
// }

// console.log (users.temirlan)
// users.temirlan.sayHello(' Tom')




// const users= [
//    {
//       name: 'temirlan',
//       age:21 ,
//       isAdmin: true 
//    },
//    {
//       name: 'john',
//       age:30 ,
//       isAdmin:true 
//    }
// ]

// users.push(
//    {
//       name: 'jo',
//       age:60 ,
//       isAdmin:true 
//    }
// )

// for (let i=0; i<users.length; i++) {
//    console.log (users[i])
// }

// const foo= "hello world"
// console.log (
//    foo.toUpperCase()
// )


const person = {
   name: "Темирлан",
   age: 21,
   city: "Бишкек",
   
   sayHello: function(name) {
   return `Hello "${name}"`;
   }
};

console.log(person.sayHello("iman")); 

const users = [
   { name: "iman", isAdmin: false },
   { name: "Алия", isAdmin: true },
   { name: "Бакыт", isAdmin: false },
   { name: "Садыр", isAdmin: false },
   { name: "Мира", isAdmin: true }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
   if (!users[i].isAdmin) {
      simpleUsersCount++;
   }
}

console.log("Количество простых пользователей:", simpleUsersCount);

// const person = {
//    name: "Темирлан",
//    age: 21,
//    city: "Бишкек",
//    sayHello(name) {
//       return `Hello "${name}"`;
//    }
// };

// console.log(person.sayHello("Айбек"));

// const users = [
//    { name: "Айбек", isAdmin: false },
//    { name: "Алия", isAdmin: true },
//    { name: "Бакыт", isAdmin: false },
//    { name: "Садыр", isAdmin: false },
//    { name: "Мира", isAdmin: true }
// ];

// let simpleUsersCount = 0;
// users.forEach(user => {
//    if (!user.isAdmin) simpleUsersCount++;
// });

// console.log("Количество простых пользователей (forEach):", simpleUsersCount);

// const simpleUsers = users.filter(user => !user.isAdmin);
// console.log("Количество простых пользователей (filter):", simpleUsers.length);