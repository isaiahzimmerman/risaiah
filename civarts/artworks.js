const artworks = [
    //1
    {
        title: "Dipylon Amphora Vase / The mourning of the dead",
        srcs: ['dipylon.jpg'],
        year: "c. 700 BC",
        dimensions: "height 61in",
        era: "Archaic",
        medium: "Pottery",
        tags: [tags.EXAM1]
    },

    //2
    {
        title: "The Brothers Cleobis and Biton",
        artist: "Polymedes of Argos",
        year: "c. 615-590 BC",
        era: "Archaic",
        dimensions: "heights 86 and 85 in",
        srcs: ['brothers.jpg'],
        tags: [tags.EXAM1]
    },

    //3
    {
        title: "Achilles and Ajax playing draughts",
        year: "c. 540 BC",
        artist: "signed by Exekias",
        dimensions: "height 24 in",
        era: "End of Archaic, moving towards Classical",
        srcs: ['ajax.jpg'],
        medium: "Pottery",
        tags: [tags.EXAM1]
    },

    //4
    {
        title: "The Warrior's Leave-Taking",
        year: "c. 510-500 BC",
        artist: "signed by Euthymedes",
        dimensions: "23.5 in",
        era: "Classical",
        srcs: ['warriors_leave_taking.jpg'],
        tags: [tags.EXAM1]
    },

    //5
    {
        title: "Hercules Carrying the Heavens from the Temple of Zeus at Olympia",
        medium: "Marble Metope",
        year: "470-460 BC",
        era: "Classical",
        srcs: ['hercules.jpg'],
        tags: [tags.EXAM1]
    },

    //6
    {
        title: "Discobolos",
        artist: "Myron",
        year: "450 BC",
        dimensions: "height 61 in",
        srcs: ['discobolos.jpg'],
        medium: "Roman marble copy, original in bronze",
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //7
    {
        title: "Parthenon",
        location: "Athens",
        year: "447-432 BC",
        medium: "All marble, no mortar",
        notes: [
            "Built under Pericles after the Acropolis was set on fire by the Persians",
        ],
        srcs: ['parthenon.jpg'],
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //8 Two Details from the Ionic Frieze of the Parthenon
    //8a
    {
        title: "Charioteer (Detail from the Ionic Frieze of the Parthenon)",
        location: "Athens",
        year: "c. 440 BC",
        srcs: ['charioteer_parthenon.jpg'],
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //8b
    {
        title: "Horse and horseman (Detail from the Ionic Frieze of the Parthenon)",
        location: "Athens",
        year: "c. 440 BC",
        srcs: ['horseman_parthenon.jpg'],
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //9
    {
        title: "Ulysses Recognized by his old Nurse",
        srcs: ['ulysses.jpg'],
        year: "480 BC",
        dimensions: "height 8in",
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //10
    {
        title: "Erectheion",
        location: "Athens",
        year: "c. 420-405 BC",
        srcs: ['erectheion.jpg'],
        era: "Classical",
        tags: [tags.EXAM1]
    },

    //11
    {
        title: "Hermes with the Young Dionysus",
        artist: "Praxiteles",
        year: "c. 340 BC",
        srcs: ['hermes_dionysus.jpg'],
        era: "Hellenistic",
        tags: [tags.EXAM1]
    },

    //12
    {
        title: "Laocoon Group",
        year: "c. 175-50 BC",
        srcs: ['laocoon.jpg'],
        era: "Hellenistic",
        tags: [tags.EXAM1]
    },

    //13a
    {
        title: "Durham Cathedral (Nave)",
        year: "AD 1093-1128",
        srcs: ['durham_nave.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //13b
    {
        title: "Durham Cathedral (West Front)",
        year: "AD 1093-1128",
        srcs: ['durham_west_front.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //14
    {
        title: "October from a Calendar Manuscript in the Wurttembergische Landesbibliotheck",
        year: "c. 1137-47 AD",
        srcs: ['october.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //15
    {
        title: "The Annunciation from the Gengenbach Gospel Book",
        year: "c. 1150",
        srcs: ['annunciation_gensbach.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //16
    {
        title: "Benedictine Church of Murbach",
        year: "c. AD 1160",
        location: "Alsace",
        srcs: ['murbach.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //17
    {
        title: "Tournai Cathedral",
        location: "Belgium",
        year: "1171-1213",
        srcs: ['tournai.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //18a
    {
        title: "Facade of the Church of St-Trophime",
        year: "c. 1180",
        location: "Arles",
        srcs: ['trophime.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //18b
    {
        title: "Facade of the Church of St-Trophime (Detail)",
        year: "c. 1180",
        location: "Arles",
        srcs: ['trophime_detail.jpg'],
        era: "Romanesque",
        tags: [tags.EXAM1]
    },

    //19a
    {
        title: "Porch of the North Transept of Chartres Cathedral",
        year: "1194",
        srcs: ['chartres_north_transept.jpg'],
        era: "Gothic",
        tags: [tags.EXAM1]
    },

    //19b
    {
        title: "Porch of the North Transept of Chartres Cathedral (Detail)",
        year: "1194",
        srcs: ['chartres_north_transept_detail.jpg'],
        era: "Gothic",
        tags: [tags.EXAM1]
    },

    //20
    {
        title: "Annunciation from the Infancy of Christ Window, Chartres Cathedral",
        year: "mid-12th century",
        srcs: ['chartres_annunciation.jpg'],
        era: "Gothic",
        tags: [tags.EXAM1]
    },

    //21
    {
        title: "Amiens Cathedral",
        year: "c. 1218-47",
        srcs: ['amiens.jpg'],
        era: "Gothic",
        tags: [tags.EXAM1]
    },

    //22
    {
        title: "Sainte-Chapelle",
        location: "Paris",
        year: "1248",
        srcs: ['sainte_chapelle.jpg'],
        era: "Gothic",
        tags: [tags.EXAM1]
    },

    //23
    {
        title: "St George",
        artist: "Donatello",
        year: "c. 1415-16",
        srcs: ['saint_george.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //24
    {
        title: "Holy Trinity",
        artist: "Masaccio",
        year: "c. 1425-28",
        srcs: ['masaccio_trinity.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //25
    {
        title: "Dome of Florence Cathedral",
        artist: "Brunelleschi",
        year: "c. 1420-36",
        srcs: ['florence_dome.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //26a
    {
        title: "Pazzi Chapel (Exterior)",
        artist: "Brunelleschi",
        year: "c. 1430",
        srcs: ['pazzi_exterior.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //26b
    {
        title: "Pazzi Chapel (Interior)",
        artist: "Brunelleschi",
        year: "c. 1430",
        srcs: ['pazzi_interior.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //27
    {
        title: "St. James on the Way to His Execution",
        artist: "Andrea Mantegna",
        year: "c. 1455",
        srcs: ['james_execution.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //28
    {
        title: "Constantine's Dream",
        artist: "Pierro della Francesca",
        year: "c. 1460",
        srcs: ['constantine.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //29
    {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: "1495-98",
        srcs: ['last_supper.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //30
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "c. 1502",
        srcs: ['mona_lisa.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //31
    {
        title: "Virgin in the Meadow",
        artist: "Raphael",
        year: "1505-6",
        srcs: ['virgin_in_the_meadow.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //32
    {
        title: "Ceiling of the Sistine Chapel",
        artist: "Michelangelo",
        year: "1508-12",
        srcs: ['sistine_ceiling.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //33
    {
        title: "The Nymph Galatea",
        artist: "Raphael",
        year: "c. 1512-14",
        srcs: ['galatea.jpg'],
        era: "Renaissance",
        tags: [tags.EXAM1]
    },

    //34a
    {
        title: "Ghent Altarpiece (Open)",
        artist: "Jan van Eyck",
        year: "1432",
        srcs: ['ghent_open.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //34b
    {
        title: "Ghent Altarpiece (Closed)",
        artist: "Jan van Eyck",
        year: "1432",
        srcs: ['ghent_closed.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //35
    {
        title: "The Descent from the Cross",
        artist: "Rogier van der Weyden",
        year: "c. 1435",
        srcs: ['descent.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //36
    {
        title: "The Nativity",
        artist: "Albrecht Durer",
        year: "1504",
        srcs: ['durer_nativity.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //37
    {
        title: "Adam and Eve",
        artist: "Albrecht Durer",
        year: "1504",
        srcs: ['durer_adam_and_eve.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //38a
    {
        title: "Isenheim Altarpiece - The Crucifixion",
        artist: "Matthias Grunewald",
        year: "1515",
        srcs: ['isenheim_crucifixion.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //38b
    {
        title: "Isenheim Altarpiece - The Resurrection",
        artist: "Matthias Grunewald",
        year: "1515",
        srcs: ['isenheim_resurrection.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //39
    {
        title: "Danube Landscape",
        artist: "Albrecht Altdorfer",
        year: "c. 1526-28",
        srcs: ['danube.jpg'],
        era: "Northern Renaissance",
        tags: [tags.EXAM1]
    },

    //40
    {
        title: "Doubting Thomas",
        srcs: ['doubting_thomas.jpg'],
        year: "c. 1602-1603",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Caravaggio",
    },

    //41
    {
        title: "Banquet of the Officers of the St. George Militia Company",
        srcs: ['banquet.jpg'],
        year: "1616",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Hals"

    },

    //42
    {
        title: "The Water-Seller of Seville",
        srcs: ['waterseller.jpg'],
        year: "c. 1619-1620",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Velazquez"
    },

    //43
    {
        title: "Virgin and Child Enthroned with Saints (Betrothal of St. Catherine)",
        srcs: ['virgin_and_child_with_saints.jpg'],
        year: "c. 1627-1628",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Peter Paul Rubens"
    },

    //44
    {
        title: "Allegory on the Blessings of Peace",
        srcs: ['allegory_on_peace.jpg'],
        year: "1629-1630",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Peter Paul Rubens"
    },
    
    //45
    {
        title: "Charles I of England",
        srcs: ['charles_i.jpg'],
        year: "c. 1635",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Anthony van Dyck"
    },

    //46
    {
        title: "Et in Arcadia ego",
        srcs: ['et_in_arcadia.jpg'],
        year: "1638-1639",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Poussin"
    },

    //47
    {
        title: "Windmill by a River",
        srcs: ['windmill.jpg'],
        year: "1642",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Goyen"
    },

    //48
    {
        title: "David and Absalom",
        srcs: ['david_absalom.jpg'],
        year: "",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Rembrandt"
    },

    //49
    {
        title: "Still Life with the Drinking Horn of the St. Sebastian Archers' Guild",
        srcs: ['drinking_horn.png'],
        year: "c. 1653",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Kalf"
    },

    //50
    {
        title: "Jan Six",
        srcs: ['jan_six.jpg'],
        year: "1654",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Rembrandt"
    },

    //51
    {
        title: "Las Meninas",
        srcs: ['las_meninas.jpg'],
        year: "1656",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Velazquez"
    },

    //52
    {
        title: "Self-Portrait",
        srcs: ['rembrandt_self.jpg'],
        year: "c. 1655-1658",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Rembrandt"
    },

    //53
    {
        title: "Prince Philip Prosper",
        srcs: ['philip_prosper.jpg'],
        year: "1659",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Velazquez"
    },

    //54
    {
        title: "The Kitchen Maid",
        srcs: ['kitchen_maid.png'],
        year: "c. 1660",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Vermeer"
    },

    //55
    {
        title: "A Pool Surrounded by Trees",
        srcs: ['pool_surrounded_by_trees.jpg'],
        year: "c. 1665-1670",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Jacob van Ruisdael"
    },

    //56
    {
        title: "Palace of Versailles",
        srcs: ['versailles.jpg'],
        year: "1655-1682",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: ""
    },

    //57
    {
        title: "Fete in a Park",
        srcs: ['fete_in_a_park.jpg'],
        year: "c. 1719",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: "Watteau"
    },

    //58a
    {
        title: "Melk Monastery (exterior)",
        srcs: ['melk_exterior.jpg'],
        year: "1702",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: ""
    },

    //58b
    {
        title: "Melk Monastery (sanctuary)",
        srcs: ['melk_interior.jpg'],
        year: "c. 1738",
        dimensions: "",
        era: "Baroque",
        medium: "",
        artist: ""
    },

    //59
    {
        title: "Marat Assassinated",
        srcs: ['david_marat.jpg'],
        year: "1793",
        dimensions: "",
        era: "",
        medium: "",
        artist: "David",
        tags: [
            tags.EXAM3,
        ]
    },

    //60
    {
        title: "The Ancient of Days",
        srcs: ['blake_ancient.jpg'],
        year: "1794",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Blake",
        tags: [
            tags.EXAM3,
        ]
    },

    //61
    {
        title: "Monticello",
        srcs: ['jefferson_monticello.jpg'],
        year: "1796-1806",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Jefferson",
        tags: [
            tags.EXAM3,
        ]
    },

    //62
    {
        title: "The Giant",
        srcs: ['goya_giant.jpg'],
        year: "c. 1818",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Goya",
        tags: [
            tags.EXAM3,
        ]
    },

    //63
    {
        title: "Landscape in the Silesian Mountains",
        srcs: ['friedrich_silesian_mountains.jpg'],
        year: "c. 1815-1820",
        dimensions: "",
        era: "",
        medium: "",
        artist: "C. D. Friedrich",
        tags: [
            tags.EXAM3,
        ]
    },

    //64
    {
        title: "The Haywain",
        srcs: ['constable_haywain.jpg'],
        year: "1821",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Constable",
        tags: [
            tags.EXAM3,
        ]
    },

    //65
    {
        title: "Arab Cavalry Practicing a Charge",
        srcs: ['delacroix_arab_cavalry.jpg'],
        year: "1832",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Delacroix",
        tags: [
            tags.EXAM3,
        ]
    },

    //66
    {
        title: "Steamer in a Snowstorm",
        srcs: ['turner_snowstorm.jpg'],
        year: "1842",
        dimensions: "",
        era: "",
        medium: "",
        artist: "J. M. Turner",
        tags: [
            tags.EXAM3,
        ]
    },

    //67
    {
        title: "The Balcony",
        srcs: ['manet_balcony.jpg'],
        year: "1868-1869",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Manet",
        tags: [
            tags.EXAM3,
        ]
    },

    //68
    {
        title: "Dance at the Moulin de la Galette",
        srcs: ['renoir_galette.jpg'],
        year: "1876",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Renoir",
        tags: [
            tags.EXAM3,
        ]
    },

    //69
    {
        title: "Gare St.-Lazare",
        srcs: ['monet_gare.jpg'],
        year: "1877",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Monet",
        tags: [
            tags.EXAM3,
        ]
    },

    //70
    {
        title: "Still Life with Fruit Dish",
        srcs: ['cezanne_fruit.jpg'],
        year: "1879-1880",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Cezanne",
        tags: [
            tags.EXAM3,
        ]
    },

    //71
    {
        title: "Madame Cezanne",
        srcs: ['cezanne_madame.jpg'],
        year: "1883-1887",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Cezanne",
        tags: [
            tags.EXAM3,
        ]
    },

    //72
    {
        title: "Cornfield with Cypresses",
        srcs: ['van_gogh_wheatfield.jpg'],
        year: "1889",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Van Gogh",
        tags: [
            tags.EXAM3,
        ]
    },

    //73
    {
        title: "The Artist's Room in Arles",
        srcs: ['van_gogh_bedroom.jpg'],
        year: "1889",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Van Gogh",
        tags: [
            tags.EXAM3,
        ]
    },

    //74
    {
        title: "Mountains in Provence",
        srcs: ['cezanne_provence.jpg'],
        year: "1886-1890",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Cezanne",
        tags: [
            tags.EXAM3,
        ]
    },

    //75
    {
        title: "Violin and Grapes",
        srcs: ['picasso_violin.jpg'],
        year: "1912",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Picasso",
        tags: [
            tags.FINAL,
        ]
    },

    //76
    {
        title: "L.H.O.O.Q.",
        srcs: ['duchamp_lhooq.jpg'],
        year: "1919",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Marcel Duchamp",
        tags: [
            tags.FINAL,
        ]
    },

    //77
    {
        title: "Apparition of Face and Fruit-Bowl on a Beach",
        srcs: ['dali_apparition.jpg'],
        year: "1938",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Dali",
        tags: [
            tags.FINAL,
        ]
    },

    //78
    {
        title: "The Cellist",
        srcs: ['chagall_cellist.jpg'],
        year: "1939",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Marc Chagall",
        tags: [
            tags.FINAL,
        ]
    },

    //79
    {
        title: "One: Number 31, 1950",
        srcs: ['pollock_one_31.jpg'],
        year: "1950",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Jackson Pollock",
        tags: [
            tags.FINAL,
        ]
    },

    //80
    {
        title: "Elegy to the Spanish Republic #34",
        srcs: ['motherwell_spanish.jpg'],
        year: "1953-1954",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Robert Motherwell",
        tags: [
            tags.FINAL,
        ]
    },

    //81
    {
        title: "The Bay",
        srcs: ['frankenthaler_bay.jpg'],
        year: "1963",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Helen Frankenthaler",
        tags: [
            tags.FINAL,
        ]
    },

    //82
    {
        title: "Clothespin",
        srcs: ['oldenburg_clothespin.jpg'],
        year: "1976",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Claes Oldenburg",
        tags: [
            tags.FINAL,
        ]
    },

    //83
    {
        title: "The Tranquility of Solitude: for George Dyer",
        srcs: ['hirst_tranquility.jpg'],
        year: "2006",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Damien Hirst",
        tags: [
            tags.FINAL,
        ]
    },

    //84
    {
        title: "Serpentine",
        srcs: ['marsch_serpentine.jpg'],
        year: "2022",
        dimensions: "",
        era: "",
        medium: "",
        artist: "Elisabeth Marsch Craton",
        tags: [
            tags.FINAL,
        ]
    },
]