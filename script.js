//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

    var user = window.prompt("Hi! What's your name?");

    if (typeof user === "string" && user !== "") {
      console.log("Hi " + user + "!")
    } else {console.log("Ok, I'll just call you User.")};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favoriteAuthor = window.prompt("Which author is your favorite?").toUpperCase();

  switch (favoriteAuthor) {
    case "CHURCHILL" :
      console.log(churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech.");
      break;

    case "GHANDI" :
      console.log(ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech.");
      break;

    case "DEMOSTHENES" :
      console.log(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech.");
      break;

    default :
      console.log("I'm sure that's a great author, but we're not here to talk about them.");
      break;
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + ".");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});