var card = {
    value: 1,
    color: "red",
    symbol: "spades"
}
function deeldeck(colorr, symbol) {
    var deck = [];
    for (var x = 0; x < 14; x++) {
        var cardo = new card;
        cardo.color = colorr;
        cardo.symbol == symbol;
        cardo.value = x + 1;
        deck.push(cardo);
    }
    return deck;

}
function carddeck() {
    var carddeck = [];
    carddeck = deeldeck(black, spades).concat(deeldeck(black, clubs).concat(deeldeck(red, diamonds).concat(deeldeck(red, hearts))));
    return carddeck;

}