import {Friend, Colleague, ColleagueHistory } from './myTypes'
 
  const friend1: Friend = {
    name: "Alex Fan",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Jordan Flynn",
    phone: "086-12345",
    age: 31,
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

  export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  //console.log(colleagues.current[0]);