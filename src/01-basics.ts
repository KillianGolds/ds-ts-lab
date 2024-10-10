import {Friend, Colleague, ColleagueHistory } from './myTypes'
 
  const friend1: Friend = {
    name: "Alex Fan",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2: Friend = {
    name: "Jordan Flynn",
    phone: "086-12345",
    age: 31,
    interests: ['Music', 'Sport']
  };
  
  export const friends = [friend1, friend2];  
  //console.log(friends[1]);
  
  //   ------------------- 
  const colleague1: Colleague = {
    name: "Gjorgi Giorgev",
    department: "Engineering",
    contact: {
      email: "gjorgi@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Jay Langford",
    department: "Finance",
    contact: {
      email: "langford@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Mark Ryan",
    department: "HR",
    contact: {
      email: "mark@company.com",
      extension: 125,
    },
  };

  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  //console.log(colleagues.current[0]);