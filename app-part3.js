function deckPick(){
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(data => {
        let currentDeck = data.data.deck_id;
        let button = document.querySelector("#pick");
        button.addEventListener("click",function(){
            axios.get(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=1`)
            .then(data => {
                console.log(data.data.cards[0].value + " of " + data.data.cards[0].suit);
                $("body").append(`<img src=${data.data.cards[0].image}>`);
            })
            .catch(err => {
                console.log("ERROR");
            })
        })
        
    })
    .catch(err => {
        console.log(err);
    })
    
};


deckPick();


