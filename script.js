// Part 1: Number Facts
// 1

let numberFacts = axios.get("http://numbersapi.com/13?json")
.then(data => {
    console.log(data.data.text);
})
.catch(err => {
    console.log(err)
})

// 2

let randomNumbers = [2,7,30,70];

let factsNumbers = axios.get(`http://numbersapi.com/${randomNumbers}?json`)
.then(data => {
    console.log(data.data)
})
.catch(err => {
    console.log(err)
})

// 3

let fourFacts = [];
for(let i = 0 ; i < 5 ; i++){
    fourFacts.push(axios.get("http://numbersapi.com/13?json"));
}
Promise.all(fourFacts)
.then(factsArr => factsArr.forEach(fact => console.log(fact.data.text)))
.catch(err => console.log(err));



// Part 2: Deck of Cards

//1

let newCard = axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
.then(data => {
    console.log(data.data.cards[0].value + " of " + data.data.cards[0].suit)
})
.catch(err => {
    console.log(err)
})



// 2

let pickCard = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(data => {
    // console.log(data.data.deck_id);
    return axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`)
})
.then(data => {
    console.log(data.data.cards[0].value + " of " + data.data.cards[0].suit)
})
.catch(err => {
    console.log(err)
});