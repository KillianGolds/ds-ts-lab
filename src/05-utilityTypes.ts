import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass, FriendColleagueIntersection,  } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)

  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log(generateEventPass(colleagues.current[0]));

  
  function intersection( 
    friends: Friend[],
    colleagues: Colleague[]
  ): FriendColleagueIntersection[] { 
    let result: FriendColleagueIntersection[] = [];   // We starat with an empty list where we'll store the results.
    
    friends.reduce((res, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        const combined: FriendColleagueIntersection = { // Create a new object with the combined properties.
          name: friend.name, // Use the friend's name.
          age: friend.age, // Use the friend's age.
          contact: colleague.contact, // Use the colleague's contact info (email and extension).
        };
        res.push(combined); // Add the combined object to the result list.
      }
      return res;
    }, result);
    
    return result;
  }
  
  console.log(intersection(friends, colleagues.current)); 
  