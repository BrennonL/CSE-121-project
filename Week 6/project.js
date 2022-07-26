


//Create a list that holds 10 nouns
let nounsBeginning = ["A dog", "The cow", "A horse", "The ball", "A fly", "The farmer", "The cowboy", "A pickle", "The zeebra", "A doctor"];

//Create a list that holds 10 verbs
let verbs = ["licked", "saw", "smelled", "ate", "swallowed", "combed", "bumpped", "cooked", "hit", "diagnosed"];

//Create a list that holds 10 nouns for the direct oject
let nounsDirectObject = ["a dog", "the cow", "a horse", "the ball", "a fly", "the farmer", "the cowboy", "a pickle", "the zeebra", "a doctor"];

//Create a list that holds the sentenes
let sentences = [];
//let bigElement = document.createElement('div')


function displayScentences(sentences){
    let indexNumber = Math.floor(Math.random()*10);
    let para = document.createElement("p");
    let theScentence = sentences[indexNumber];
    // para.innertext = theScentence;
    // document.getElementById("Display").appendChild(para);
    document.querySelector("#Display").innerHTML = theScentence;
    


}

//Create a fubctuib that creates a sentence
function createSentences(nounsBeginning, verbs, nounsDirectObject,sentences){
    nounsBeginning.forEach(noun => {
        let indexVerb = Math.floor(Math.random() * 10);
        let indexNoun = Math.floor(Math.random() * 10);
        let punctuation = getPunctuation(verbs[indexVerb]);
        let sentence = noun + " " + verbs[indexVerb] + " " + nounsDirectObject[indexNoun] + punctuation;
        sentences.push(sentence);


        // sentences.push(sentence);
    });
    console.log(sentences);
    displayScentences(sentences);
}

//Create a function that displays the sentences



//Create a function that checks to see which verb is passed in and add an exlamation point or a period.
function getPunctuation(verb){
    if(verb === "ate" || verb === "hit" || verb === "cooked" || verb === "swallowed"){
        return "!"
    }
    else{
        return "."
    }
}



const button = document.querySelector("#ScnetenceGenerator");

button.addEventListener('click', function() {createSentences(nounsBeginning, verbs, nounsDirectObject,sentences)});
//document.getElementById("myBtn").addEventListener("click", displayDate);

// document.getElementById("myBtn").addEventListener("click", function() {
//     myFunction(p1, p2);
//   });
  
//   function myFunction(a, b) {
//     document.getElementById("demo").innerHTML = a * b;
//   }