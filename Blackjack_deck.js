
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["diamonds", "hearts", "spades", "clubs"];
    var deck = new Array();

    function createDeck(){
        for (var i = 0; i < values.length; i++){
          for (var x = 0; x < suits.length; x++){
            var weight = parseInt(values[i]);
            if (values[i] == 'J' || values[i] == 'Q' || values[i] == 'K')
              weight = 10;
            else if (values[i] == 'A')
              weight = 11
            var card = {Value: values[i], Suit: suits[x], Weight: weight};
            deck.push(card)
          }
        }
      }
    
    function getDeck()
    {
        var deck = new Array();
    
        for(var i = 0; i < suits.length; i++)
        {
            for(var x = 0; x < values.length; x++)
            {
                var card = {Value: values[x], Suit: suits[i]};
                deck.push(card);
            }
        }
    
        return deck;
    }
    
    function shuffle()
    {
        // for 1000 turns
        // switch the values of two random cards
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];
    
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    
        return deck
    }
    
    
    const newDeck = document.querySelector('#deck')

    function load(newDeck){
        
        newDeck.innerHTML = ''
        deck = getDeck();
        shuffle();
        for (let i = 0; i < 4; i++){
            newDeck.appendChild(imageRender(deck[i]))    
        }
        
    }
    
    function playerHand(newDeck){
        newDeck.innerHTML = ''
        deck = getDeck();
        
    }
    

    window.onload = load;

    function imageRender(card) {
        const cardImage = document.createElement('img')
        if (card.Value === 'A'){
            cardImage.setAttribute('src', `./images/ace_of_${card.Suit}.png`);
        }
        else if (card.Value === 'J'){
             cardImage.setAttribute('src', `./images/jack_of_${card.Suit}.png`)
        }
        else if (card.Value === 'Q'){
            cardImage.setAttribute('src', `./images/queen_of_${card.Suit}.png`)
        }
        else if (card.Value === 'K'){
            cardImage.setAttribute('src', `./images/king_of_${card.Suit}.png`)
        }
        else{
            cardImage.setAttribute('src', `./images/${card.Value}_of_${card.Suit}.png`)
        }
        return cardImage
    }
