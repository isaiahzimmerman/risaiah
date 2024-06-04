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
    {buttonText: "back 3 spaces", cardAction: {type: "gain", amount: 0}, cardText: "MOVE BACK 3 SPACES"},
    // +50
    {buttonText: "+50", cardAction: {type: "gain", amount: 50}, cardText: "GET $50"},
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
    
    // x -40 per house 115 per hotel
    {buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:40, hotel: 115}}, cardText: "LOSE $40 PER HOUSE AND $115 PER HOTEL"},
    
]