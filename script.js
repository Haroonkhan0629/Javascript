const myDog = {
    myName: "Astro",
    mySound: "I am not scary",
    myTelevision: "The Jetsons",
    myBreed: "Great Dane",
} 

let text = `My name is ${myDog.myName}, when I bark ${myDog.mySound}. I am from the television show ${myDog.myTelevision}, and my character is a ${myDog.myBreed}.`
document.getElementById("dog").innerText = text



class myDogConst {
    constructor(myName, mySound, myProgram, myBreed, canTalk) {
      this.myName = myName
      this.mySound = mySound
      this.myProgram = myProgram
      this.myBreed = myBreed
      this.canTalk = canTalk
    }
   
    myGreeting() {
        return `My name is ${this.myName}, when I bark ${this.mySound}. I am from the television show ${this.myTelevision}, and my character is a ${this.myBreed}.`
    }

    if (_canTalk = true) {
        myGreeting()
    }
   
  }
   
  const dog2 = new myDogConst("Astro", "I am a cool, calm and collected family dog", "The Jetsons", "Great Dane", true) 

  let text2 = `My name is ${myDog.myName}, when I bark ${myDog.mySound}. I am from the television show ${myDog.myTelevision}, and my character is a ${myDog.myBreed}.`
  document.getElementById("constDog").innerText = text2













