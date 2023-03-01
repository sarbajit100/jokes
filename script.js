let myjokes = ["Which is faster, hot or cold? Hot, because you can catch cold.", 
"What did one plate say to the other plate? Dinner's on me.", "Why do oranges wear sunscreen? So they don't peel.",
"My wife told me to stop acting like a flamingo, so I had to put my foot down.",
"What do you call a pig that does karate? A pork chop.",
"Where does Batman go to the bathroom? The batroom.",
"What do you call a pony with a sore throat? A little horse.",
"What did the left eye say to the right eye? Between you and me, something smells.",
"What did the mama tomato say to the baby tomato? Catch up!",
"Why didn't the melons get married? Because they cantaloupe.",
"What do you call a fake noodle? An impasta.",
"How did the pig get to the hogspital? In a hambulance.",
"I'm so good at sleeping I can do it with my eyes closed!",
"Why does Humpty Dumpty love autumn? Because he had a great fall.",
"What happens when a strawberry gets run over crossing the street? Traffic jam.",
"Why did the cow jump over the moon? The farmer had cold hands.",
"A termite walks into a bar and says, So, is the bar tender here?",
"How does an octopus go into battle? Well-armed.",
"What do you call a pudgy psychic? A four-chin teller.",
"What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.",
"How do celebrities stay cool? They have many fans.",
"What does a pickle say when he wants to play cards? Dill me in!",
"How much money does a pirate pay for corn? A buccaneer.",
"Where do young trees go to learn? Elementree school.",
"Why do bees have sticky hair? Because they use a honeycomb.",
"How did the student feel when he learned about electricity? Totally shocked.",
"What do you call a bee that can't make up its mind? A Maybe.",
"Why was six afraid of seven? Because 7-8-9.",
"If April showers bring May flowers, what do May flowers bring? Pilgrims.",
"I tried to catch fog yesterday. Mist.",
"What do you call a hippie's wife? Mississippi.",
"Two peanuts were walking down the street. One was a-salted.",
"How can you tell its a dogwood tree? By the bark.",
"What did the buffalo say when his kid went to college? Bison.",
"What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.",
"What's the stinkiest planet? Poopiter."]

const colour = () =>{
    let num = "0123456789ABCDEF"
    let con = "#"

    for (let i=0; i<6; i++){
        con = con + num[Math.floor(Math.random() * 16)]
    }
    return con
}


function joke() {
    let index = Math.floor(Math.random()* myjokes.length-1);
    document.getElementById("para").innerText = myjokes[index];
    document.getElementById("para").style.fontSize = "40px"
    document.body.style.backgroundColor = colour();
}



