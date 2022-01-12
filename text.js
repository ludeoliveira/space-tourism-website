



// var birthday = new Date(1987, 2, 30, 12, 00, 00)


// var birthday2 = new Date(1987, 2, 30, 12, 00, 00)

// if (birthday.getTime() === birthday2.getTime()) {
//     console.log("birthdays are equal")
// }   else {
//     console.log("birthdays are not equal")
// }




// class User {
//     constructor(email, name){
//         this.email = email
//         this.name = name
//         this.score = 0

//     }
    
//     login(){
//         console.log(this.email, 'has logged in')
//         return this
//     }

//     logout() {
//         console.log(this.email, 'has logged out')
//         return this
//     }
//     updateScore(){
//         this.score++
//         console.log(this.email, 'score is now', this.score)
//         return this
//     }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u =>{
//             return u.email != user.email
//         })
//     }
// }

// let userOne = new User('ryu@ninja.com', 'Ryu')
// let userTwo = new User('yoshi@ninja.com', 'Yoshi')
// let admin = new Admin('shaun@ninjas.com', 'shaun')
// let users = [userOne, userTwo]


// userOne.updateScore().updateScore().logout()


// new creates an empty object and calls the constructor method. sets the value of 'this'to the new empty object

// class Movie {
//     constructor(title,  year, director){
//         this.title = title
//         this.year = year
//         this.director = director
//     }
    

// }

// let movie1 = new Movie('Mariguella', 2021, 'Wagner Moura')
// let movie2 = new Movie('Bacurau', 2019, 'Kleber Mendonça Filho e Juliano Dornelles')

// console.log(movie2)