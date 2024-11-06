class Dog {
    constructor(myName, mySound, myTelevision, myBreed, canTalk) {
      this.myName = myName
      this.mySound = mySound
      this.myTelevision = myTelevision
      this.myBreed = myBreed
      this.canTalk = canTalk
    }
   
    myGreeting() {
        if (this.canTalk == true) {
            for (const key in dog) {
                if (dog.hasOwnProperty(key)) {
                    sentance.push(key + ": " + dog[key])
                }
            }

            return sentance
        } else {
            return "I can't talk"
        }
    }

    myGreeting2() {
        if (this.canTalk == true) {
            for (const key in dog2) {
                if (dog2.hasOwnProperty(key)) {
                    sentance.push(key + ": " + dog2[key])
                }
            }

            return sentance
        } else {
            return "I can't talk"
        }
    }
    
}
const dog = new Dog("Astro", "I am a cool, calm and collected family dog", "The Jetsons", "Great Dane", true) 
const dog2 = new Dog("Bailey", "I am one of Clifford's friends", "Clifford the Big Red Dog", "Australian Shepherd", true) 
const sentance = []

let answer = prompt("Select Astro or Bailey:")

if (answer == "Astro") {
    let text = dog.myGreeting()
    document.getElementById("dog").innerText = text

} else if (answer == "Bailey") {
    let text = dog2.myGreeting2()
    document.getElementById("dog").innerText = text
    
} else {
    alert("Not an Option, Try Again!")
}






  
  















