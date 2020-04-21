const createPerson = (name, age) => {
  return {
    name: name,
    age: age
    };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  } 
    return false;
  
};

const isOver65 = person => {
if  (person.age > 65) {
  return true;
}
return false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name == name);
};

const findHondas = cars => {
 return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  const ages = people.map( person => person.age);
  return ages.reduce((totalAge, currentValue) => totalAge + currentValue , 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: stranger => {
     return `Hi ${stranger}, my name is ${name} and I am ${age}!`
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
