interface Friend {
    name: string;
    phone: string;
    age: number;
  }
  
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
  
  const friends: Friend[] = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
interface Colleague {
    name: string;
    department: string;
    contact: Contact;
  }

interface Contact {
    email: string;
    extension: number;
  }

interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
  }
  
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
  
  console.log(colleagues.current[0]);