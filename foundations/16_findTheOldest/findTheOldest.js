const findTheOldest = function (people) {
  //   let maxAge = -Infinity;
  //   let currAge;
  //   let result;
  //   const CURRENT_YEAR = new Date().getFullYear();
  //   for (let person of people) {
  //     if (!("yearOfDeath" in person)) {
  //       currAge = CURRENT_YEAR - person.yearOfBirth;
  //       console.log(currAge, maxAge);
  //       if (maxAge < currAge) {
  //         maxAge = currAge;
  //         result = person;
  //       }
  //     } else {
  //       currAge = person.yearOfDeath - person.yearOfBirth;
  //       console.log(currAge, maxAge);
  //       if (maxAge < currAge) {
  //         maxAge = currAge;
  //         result = person;
  //       }
  //     }
  //     console.log(result);
  //   }
  //   return result;

  const CURRENT_YEAR = new Date().getFullYear();

  return people.reduce((prev, curr) => {
    let age;
    if (!("yearOfDeath" in curr)) {
      age = CURRENT_YEAR - curr.yearOfBirth;
    } else {
      age = curr.yearOfDeath - curr.yearOfBirth;
    }

    let prevAge;
    if (!("yearOfDeath" in prev)) {
      prevAge = CURRENT_YEAR - prev.yearOfBirth;
    } else {
      prevAge = prev.yearOfDeath - prev.yearOfBirth;
    }
    if (age > prevAge) return curr;
    return prev;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
