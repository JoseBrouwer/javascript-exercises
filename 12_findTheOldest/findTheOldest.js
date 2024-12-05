const findTheOldest = function(people) {
    let oldest = 0;
    people.forEach(person => {
        if(!person.yearOfDeath)
        {
            let today = new Date(2024, 11); //assuming 0 index since 12 makes 2025
            person.yearOfDeath = today.getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if(age > oldest)
            oldest = age;
    });
    let oldestPerson = people.find(person => (person.yearOfDeath - person.yearOfBirth) === oldest);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
