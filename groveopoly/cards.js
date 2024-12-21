chanceCards = [
    // move to boardwalk
    {buttonText: "Move", cardAction: {type: "move", loc: "r8"}, cardText: "Advance to TMX Towers.", cardImg: "happy.png"},
    // move to go
    {buttonText: "Move", cardAction: {type: "move", loc: "c0"}, cardText: "Move to GO and collect $200.", cardImg: "happy.png"},
    // move to illinois
    {buttonText: "Move", cardAction: {type: "move", loc: "t3"}, cardText: "Advance to Hoyt.", cardImg: "happy.png"},
    // move to st Charles
    {buttonText: "Move", cardAction: {type: "move", loc: "l0"}, cardText: "Advance to Ketler.", cardImg: "happy.png"},
    // move to reading Railroad
    {buttonText: "Move", cardAction: {type: "move", loc: "b4"}, cardText: "Advance to Crawford Tunnel.", cardImg: "happy.png"},
    // move to nearest Railroad, pay 2x rent
    {buttonText: "Move", cardAction: {type: "move", loc: 0}, cardText: "MOVE TO THE NEAREST TUNNEL. IF OWNED, PAY THE OWNER DOUBLE THE RENT. IF UNOWNED, YOU MAY PURCHASE IT FROM THE BANK.", cardImg: "ferocious.png"},
    // move to nearest Railroad, pay 2x rent
    {buttonText: "move to nearest tunnel", cardAction: {type: "move", loc: 0}, cardText: "MOVE TO THE NEAREST TUNNEL. IF OWNED, PAY THE OWNER DOUBLE THE RENT. IF UNOWNED, YOU MAY PURCHASE IT FROM THE BANK.", cardImg: "ferocious.png"},
    // move to nearest utility, pay 10x multiplier
    {buttonText: "nearest utility", cardAction: {type: "gain", amount: 0}, cardText: "MOVE TO THE NEAREST UTILITY AND PAY 10 TIMES A DICE ROLL.", cardImg: "ferocious.png"},
    // move back 3 Spaces
    {buttonText: "back 3 spaces", cardAction: {type: "m", amount: 0}, cardText: "MOVE BACK 3 SPACES", cardImg: "ferocious.png"},
    // +50
    {buttonText: "+50", cardAction: {type: "gain", amount: 50}, cardText: "You didn't donate to the senior gift. Gain $50.", cardImg: "happy.png"},
    // +150
    {buttonText: "+150", cardAction: {type: "gain", amount: 150}, cardText: "Your paycheck for working the desk came in!", cardImg: "happy.png"},
    // get out of jail
    {buttonText: "stash", cardAction: {type: "jail"}, cardText: "GET OUT OF JAIL FREE. YOU MAY STASH THIS CARD AND SAVE IT FOR LATER.", cardImg: "happy.png"},
    // go to jail
    {buttonText: "go to jail", cardAction: {type: "goToJail"}, cardText: "Go to jail.", cardImg: "sad_jail.png"},
    // -25/house, 100/hotel
    {buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:25, hotel: 100}}, cardText: "LOSE $25 PER HOUSE AND $100 PER HOTEL", cardImg: "ferocious.png"},
    // -15
    {buttonText: "-15", cardAction: {type: "loss", amount: 15}, cardText: "You got a parking ticket for $15!", cardImg: "ferocious.png"},
    // 50 to each player
    {buttonText: "50 to each player", cardAction: {type: "payEachPlayer", amount: 50}, cardText: "Pay $50 to each player", cardImg: "ferocious.png"},
]

chestCards = [
    // x move to go
    {buttonText: "Move", cardAction: {type: "move", loc: "c0"}, cardText: "Move to GO, collect $200.", cardImg: "happy.png"},
    // x +200
    {buttonText: "+200", cardAction: {type: "gain", amount: 200}, cardText: "You made the dean's list! Gain $200 in scholarship.", cardImg: "happy.png"},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}, cardText:"You flipped everything in Campo's lost and found on Ebay and made $150!", cardImg: "happy.png"},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}, cardText:"You charged $100 to a freshman for the Healthful Living cheat sheet!", cardImg: "happy.png"},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}, cardText:"Your wacky idea won $100 at the elevator pitch competition!", cardImg: "happy.png"},
    // x +45
    {buttonText: "+45", cardAction: {type: "gain", amount: 45}, cardText:"You earned $45 raking a professor's leaves!", cardImg: "happy.png"},
    // x +25
    {buttonText: "+25", cardAction: {type: "gain", amount: 25}, cardText:"You got $25 selling your textbooks back to the bookstore! (You paid $300 for them.)", cardImg: "happy.png"},
    // x +20
    {buttonText: "+20", cardAction: {type: "gain", amount: 20}, cardText:"Your mommy sent you a care package with $20 inside!", cardImg: "happy.png"},
    // x +10
    {buttonText: "+10", cardAction: {type: "gain", amount: 10}, cardText:"Your friend finally paid your $10 back from that one Sheetz trip!", cardImg: "happy.png"},
    // x -150
    {buttonText: "-150", cardAction: {type: "loss", amount: 150}, cardText:"Pay $150 for your parking pass!", cardImg: "ferocious.png"},
    // x -100
    {buttonText: "-100", cardAction: {type: "loss", amount: 100}, cardText:"You spent $100 on textbooks for one class!", cardImg: "ferocious.png"},
    // x -50
    {buttonText: "-50", cardAction: {type: "loss", amount: 50}, cardText:"You forgot to defrost your fridge over break and got fined!", cardImg: "ferocious.png"},
    // x +50 from every player
    {buttonText: "fix me", cardAction: {type: "gain", amount: 0}, cardText: "fix me pls. cards.js line 61", cardImg: "happy.png"},
    // x -40 per house 115 per hotel
    {buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:40, hotel: 115}}, cardText: "LOSE $40 PER HOUSE AND $115 PER HOTEL", cardImg: "ferocious.png"},
    // x go to jail
    {buttonText: "go to jail", cardAction: {type: "goToJail"}, cardText: "Go to jail.", cardImg: "sad_jail.png"},
    // x get out of jail
    {buttonText: "stash", cardAction: {type: "jail"}, cardText: "Get out of jail free! You may save this card and trade it with other players.", cardImg: "happy.png"},
]