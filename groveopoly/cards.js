chanceCards = [
    // move to boardwalk
    {buttonText: "Move", cardAction: {type: "move", loc: "r8"}, cardText: "Advance to TMX Towers."},
    // move to go
    {buttonText: "Move", cardAction: {type: "move", loc: "c0"}, cardText: "Move to GO and collect $200."},
    // move to illinois
    {buttonText: "Move", cardAction: {type: "move", loc: "t3"}, cardText: "Advance to Hoyt."},
    // move to st Charles
    {buttonText: "Move", cardAction: {type: "move", loc: "l0"}, cardText: "Advance to Ketler."},
    // move to reading Railroad
    {buttonText: "Move", cardAction: {type: "move", loc: "b4"}, cardText: "Advance to Crawford Tunnel."},
    // move to nearest Railroad, pay 2x rent
    {buttonText: "Move", cardAction: {type: "move", loc: 0}, cardText: "MOVE TO THE NEAREST TUNNEL. IF OWNED, PAY THE OWNER DOUBLE THE RENT. IF UNOWNED, YOU MAY PURCHASE IT FROM THE BANK."},
    // move to nearest Railroad, pay 2x rent
    {buttonText: "move to nearest tunnel", cardAction: {type: "move", loc: 0}, cardText: "MOVE TO THE NEAREST TUNNEL. IF OWNED, PAY THE OWNER DOUBLE THE RENT. IF UNOWNED, YOU MAY PURCHASE IT FROM THE BANK."},
    // move to nearest utility, pay 10x multiplier
    {buttonText: "nearest utility", cardAction: {type: "gain", amount: 0}, cardText: "MOVE TO THE NEAREST UTILITY AND PAY 10 TIMES A DICE ROLL."},
    // move back 3 Spaces
    {buttonText: "back 3 spaces", cardAction: {type: "m", amount: 0}, cardText: "MOVE BACK 3 SPACES"},
    // +50
    {buttonText: "+50", cardAction: {type: "gain", amount: 50}, cardText: "You didn't donate to the senior gift. Gain $50."},
    // +150
    {buttonText: "+150", cardAction: {type: "gain", amount: 150}, cardText: "Gain $150"},
    // get out of jail
    {buttonText: "stash", cardAction: {type: "jail"}, cardText: "GET OUT OF JAIL FREE. YOU MAY STASH THIS CARD AND SAVE IT FOR LATER."},
    // go to jail
    {buttonText: "go to jail", cardAction: {type: "goToJail"}, cardText: "Go to jail."},
    // -25/house, 100/hotel
    {buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:25, hotel: 100}}, cardText: "LOSE $25 PER HOUSE AND $100 PER HOTEL"},
    // -15
    {buttonText: "-15", cardAction: {type: "loss", amount: 15}, cardText: "LOSE $15"},
    // 50 to each player
    {buttonText: "50 to each player", cardAction: {type: "payEachPlayer", amount: 50}, cardText: "Pay $50 to each player"},
]

chestCards = [
    // x move to go
    {buttonText: "Move", cardAction: {type: "move", loc: "c0"}, cardText: "Move to GO, collect $200.", cardImg: "chance-template.svg"},
    // x +200
    {buttonText: "+200", cardAction: {type: "gain", amount: 200}},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    // x +100
    {buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    // x +45
    {buttonText: "+45", cardAction: {type: "gain", amount: 45}},
    // x +25
    {buttonText: "+25", cardAction: {type: "gain", amount: 25}},
    // x +20
    {buttonText: "+20", cardAction: {type: "gain", amount: 20}},
    // x +10
    {buttonText: "+10", cardAction: {type: "gain", amount: 10}},
    // x -150
    {buttonText: "-150", cardAction: {type: "loss", amount: 150}},
    // x -100
    {buttonText: "-100", cardAction: {type: "loss", amount: 100}},
    // x -50
    {buttonText: "-50", cardAction: {type: "loss", amount: 50}},
    // x +50 from every player
    {buttonText: "fix me", cardAction: {type: "gain", amount: 0}, cardText: "fix me pls. cards.js line 61"},
    // x -40 per house 115 per hotel
    {buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:40, hotel: 115}}, cardText: "LOSE $40 PER HOUSE AND $115 PER HOTEL"},
    // x go to jail
    {buttonText: "go to jail", cardAction: {type: "goToJail"}, cardText: "Go to jail."},
    // x get out of jail
    {buttonText: "stash", cardAction: {type: "jail"}, cardText: "Get out of jail free! You may save this card and trade it with other players."},
]