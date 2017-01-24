console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (landName) {
    console.log(landName)

    var article = document.createElement('article')
    article.id = landName  // Adding land's name as ID for each article
    var h1 = document.createElement('h1')

    h1.textContent = landName

    article.appendChild(h1)
    middleEarth.appendChild(article)
  })
  body.appendChild(middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth()

// Part 2

function makeHobbits () {

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var ul = document.createElement('ul')
  // Section id - middle-earth . article (1st child)
  var shireArticle = document.getElementById('middle-earth').querySelector(':first-child')
  hobbits.forEach(function (elm) {
    var li = document.createElement('li')
    li.textContent = elm
    li.className = 'hobbit'
    ul.appendChild(li)
  })
  shireArticle.appendChild(ul)
}

makeHobbits()
// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  var frodo = document.querySelector('.hobbit')
  // var frodo = document.getElementsByClassName('hobbit')[0]
  var nazgulDiv = document.createElement('div')
  nazgulDiv.id = 'the-ring'
  nazgulDiv.className = 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  nazgulDiv.addEventListener('click', nazgulScreech)
// add the ring as a child of Frodo
  frodo.appendChild(nazgulDiv)
}

keepItSecretKeepItSafe()
// Part 4

function makeBuddies () {
// create an aside tag
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  // attach an unordered list of the 'buddies' in the aside
  buddies.forEach(function (elm) {
    var li = document.createElement('li')
    li.textContent = elm
    ul.appendChild(li)
  })
  aside.appendChild(ul)
  var rivendellArticle = document.getElementsByTagName('Article')[1]
  // insert your aside as a child element of rivendell
  rivendellArticle.appendChild(aside)

}

makeBuddies()
// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var Strider = document.querySelector('aside').firstElementChild.querySelector(':nth-child(4)')
  Strider.textContent = 'Aragorn'
}

beautifulStranger()
// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  // var rivenUl = document.getElementsByTagName('Article')[1].querySelector(':nth-child(2)').querySelector(':only-child')
  var rivenUl = document.getElementById('Rivendell').getElementsByTagName('ul')[0]
  var hobbitNode = document.getElementById('The Shire').getElementsByTagName('li')
  var hobbitUl = document.getElementById('The Shire').getElementsByTagName('ul')[0]

  for (var i = 0; i < hobbitNode.length; i) {
    var hobbitLi = hobbitNode[i]
    var moveHobbitLi = hobbitUl.removeChild(hobbitLi)
    rivenUl.appendChild(moveHobbitLi)
  }
}
leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  var fellowDiv = document.createElement('div')
  fellowDiv.id = 'the-fellowship'
  document.getElementById('Rivendell').appendChild(fellowDiv) // adds the-felowship div into rivendell article

  var rivenUl = document.getElementById('Rivendell').getElementsByTagName('ul')[0]
  var RivenLiNode = rivenUl.getElementsByTagName('li') // Node of all Rivendell li items
  for (var i = 0; i < RivenLiNode.length; i) {
    var rivenLi = RivenLiNode[i]
    var rivenLiToMove = rivenUl.removeChild(rivenLi)
    // add each hobbit and buddy one at a time to 'the-fellowship'
    fellowDiv.appendChild(rivenLiToMove)
    // after each character is added make an alert that they have joined your party
    // alert(rivenLi.textContent + ' has joined the fellowship party!') //Why did the page blank out when running??
  }
}

forgeTheFellowShip()

// Part 8

function theBalrog () {
  var fellowDiv = document.getElementById('the-fellowship')
  var gandalfLi = fellowDiv.getElementsByTagName('li')[0]
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalfLi.textContent = 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalfLi.style.backgroundColor = 'white'
  gandalfLi.style.border = 'thick solid grey'
}
theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // alert('Horn of gondor has been blown! Prepare yourself mighty warriors!')
  var boroLi = document.getElementById('the-fellowship').getElementsByTagName('li')[4]
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  boroLi.style.textDecoration = 'line-through'
  var deadDiv = document.createElement('div')
  deadDiv.id = 'dead'
  var rivenArticle = document.getElementById('Rivendell')
  rivenArticle.appendChild(deadDiv)
  // Remove Boromir from the Fellowship
  fellowDiv = document.getElementById('the-fellowship')
  var removedBoro = fellowDiv.removeChild(boroLi)
  deadDiv.appendChild(removedBoro)
}

hornOfGondor()
// Part 10

function itsDangerousToGoAlone () {
  var fellowDiv = document.getElementById('the-fellowship')
  var frodoLi = document.getElementsByClassName('hobbit')[0]
  frodoLi.id = 'frodo'
  var samLi = document.getElementsByClassName('hobbit')[1]
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var mordorArticle = document.getElementById('Mordor')
  // Remove Frodo from fellowship, move to mordor
  var moveFrodoLi = fellowDiv.removeChild(frodoLi)
  mordorArticle.appendChild(moveFrodoLi)
// Remove sam from fellowship, move
  var moveSamLi = fellowDiv.removeChild(samLi)
  mordorArticle.appendChild(moveSamLi)
// add a div with an id of 'mount-doom' to Mordor
  var mountDoomDiv = document.createElement('div')
  mountDoomDiv.id = 'mount-doom'
  mordorArticle.appendChild(mountDoomDiv)
}
itsDangerousToGoAlone()
// Part 11

function weWantsIt () {
    // Create a div with an id of 'gollum' and add it to Mordor
  var gollumDiv = document.createElement('div')
  gollumDiv.id = 'gollum'
  var mordorArticle = document.getElementById('Mordor')
  mordorArticle.appendChild(gollumDiv)
  // Remove the ring from Frodo and give it to Gollum
  var frodoLi = document.getElementById('frodo')
  var ringDiv = document.getElementById('the-ring')
  var removedRing = frodoLi.removeChild(ringDiv)
  gollumDiv.appendChild(removedRing)
  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById('mount-doom')
  var removeGollum = mordorArticle.removeChild(gollumDiv)
  mountDoom.appendChild(removeGollum)
}

weWantsIt()
// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  var gollumDiv = document.getElementById('gollum')
  var mountDoom = document.getElementById('mount-doom')
  mountDoom.removeChild(gollumDiv)

  // Move all the hobbits back to the shire
  var shireUl = document.getElementById('The Shire').getElementsByTagName('ul')[0]
  var mordorArticle = document.getElementById('Mordor')
  var fellowDiv = document.getElementById('the-fellowship')

  // Finding Hobbits
  var merryLi = document.getElementsByClassName('hobbit')[0]
  var pippinLi = document.getElementsByClassName('hobbit')[1]
  var frodoLi = document.getElementsByClassName('hobbit')[2]
  var samLi = document.getElementsByClassName('hobbit')[3]

// Move hobbits to Shire
  var moveMerry = fellowDiv.removeChild(merryLi)
  shireUl.appendChild(moveMerry)
  var movePippin = fellowDiv.removeChild(pippinLi)
  shireUl.appendChild(movePippin)
  var moveFrodo = mordorArticle.removeChild(frodoLi)
  shireUl.appendChild(moveFrodo)
  var moveSam = mordorArticle.removeChild(samLi)
  shireUl.appendChild(moveSam)

  // remove all the buddies from the document
  // Removing all alive buddies
  var buddyLiNode = fellowDiv.getElementsByTagName('li')
  for (var i = 0; i < buddyLiNode.length; i) {
    fellowDiv.removeChild(buddyLiNode[i])
  }
  // Removing dead Boromir
  var rivenArticle = document.getElementById('Rivendell')
  var deadDiv = document.getElementById('dead')
  rivenArticle.removeChild(deadDiv)
}

thereAndBackAgain()
