JavaScript
const president = (function(){
    const presidentsPrivateInformation = 'Super private'

    const name = 'Turd Sandwich'

    const getName = () => name

    return {
        getName
    }
}())


president.getName() // 'Turd Sandwich'
president.name // undefined
president.presidentsPrivateInformation // undefined


// пример 2 

let instance = null;

function User() {
  if(instance) {
    return instance;
  }

instance = this;
  this.name = 'Peter';
  this.age = 25;
  
  return instance;
}

const user1 = new User();
const user2 = new User();

// prints true
console.log(user1 === user2);

//пример3 
const singleton = (function() {
    let instance;
    
    function init() {
      return {
        name: 'Peter',
        age: 24,
      };
    }
  
  return {
      getInstance: function() {
        if(!instance) {
          instance = init();
        }
        
        return instance;
      }
    }
  })();
  
  const instanceA = singleton.getInstance();
  const instanceB = singleton.getInstance();
  
  // prints true
  console.log(instanceA === instanceB);