let anArr = ['x', 'Y','Z']
console.log(anArr)

const obg =  {
  name: 'Jonah miha',
  profession: 'Senior Developer',
  age : 34,
  type: 'user',
  active: false,
  user: function () {
    return `My name is ${this.name}, I am a ${this.profession}`
  }
} 

console.log(obg.user())