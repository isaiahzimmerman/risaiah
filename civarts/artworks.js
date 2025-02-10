const artworks = [
    //1
    {
        title: "Dipylon Amphora Vase / The mourning of the dead",
        srcs: ['dipylon.jpg'],
        year: "c. 700 BC",
        dimensions: "height 61in",
        era: "Archaic (??)",
        medium: "Pottery"
    },

    //2
    {
        title: "The Brothers Cleobis and Biton",
        artist: "Polymedes of Argos",
        year: "c. 615-590 BC",
        era: "Classical?? I think Archaic",
        dimensions: "heights 86 and 85 in",
        srcs: ['brothers.jpg'],
    },

    //3
    {
        title: "Achilles and Ajax playing draughts",
        year: "c. 540 BC",
        artist: "signed by Exekias",
        dimensions: "height 24 in",
        era: "End of Archaic, moving into Classical",
        srcs: ['ajax.jpg'],
        medium: "Pottery"
    },

    //4
    {
        title: "The Warrior's Leave-Taking",
        year: "c. 510-500 BC",
        artist: "signed by Euthymedes",
        dimensions: "23.5 in",
        era: "Classical",
        srcs: ['warriors_leave_taking.jpg']
    },

    //5
    {
        title: "Hercules Carrying the Heavens",
        medium: "Marble Metope from the Temple of Zeus at Olympia",
        year: "470-460 BC",
        era: "Classical",
        srcs: ['hercules.jpg']
    },

    //6
    {
        title: "Discobolos",
        artist: "Myron",
        year: "450 BC",
        dimensions: "height 61 in",
        srcs: ['discobolos.jpg'],
        medium: "Roman marble copy, original in bronze"
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
        srcs: ['parthenon.jpg']
    },

    //8 Two Details from the Ionic Frieze of the Parthenon
    //8a
    {
        title: "Charioteer (Detail from the Ionic Frieze of the Parthenon)",
        location: "Athens",
        year: "c. 440 BC",
        srcs: ['charioteer_parthenon.jpg']
    },

    //8b
    {
        title: "Horse and horseman (Detail from the Ionic Frieze of the Parthenon)",
        location: "Athens",
        year: "c. 440 BC",
        srcs: ['horseman_parthenon.jpg']
    },

    //9
    {
        title: "Ulysses Recognized by his old Nurse",
        srcs: ['ulysses.jpg'],
        year: "480 BC",
        dimensions: "height 8in",
        era: "Classical"
    },

    //10
    {
        title: "Erectheion",
        location: "Athens",
        year: "c. 420-405 BC",
        srcs: ['erectheion.jpg']
    },

    //11
    {
        title: "Hermes with the Young Dionysus",
        artist: "Praxiteles",
        year: "c. 340 BC",
        srcs: ['hermes_dionysus.jpg']
    },

    //12
    {
        title: "Laocoon Group",
        year: "c. 175-50 BC",
        srcs: ['laocoon.jpg']
    },

    //13a
    {
        title: "Durham Cathedral (Nave)",
        year: "AD 1093-1128",
        srcs: ['durham_nave.jpg']
    },

    //13b
    {
        title: "Durham Cathedral (West Front)",
        year: "AD 1093-1128",
        srcs: ['durham_west_front.jpg']
    },

    //14
    {
        title: "October from a Calendar Manuscript in the Wurttembergische Landesbibliotheck",
        year: "c. 1137-47 AD",
        srcs: ['october.jpg']
    },

    //15
    {
        title: "The Annunciation from a Swabian gospel manuscript",
        year: "c. 1150",
        srcs: ['annunciation_gensbach.jpg']
    },

    //16
    {
        title: "Benedictine Church of Murbach",
        srcs: ['murbach.jpg']
    },

    //17
    {
        title: "Tournai Cathedral",
        location: "Belgium",
        year: "1171-1213",
        srcs: ['tournai.jpg']
    },

    //18
    {
        title: "Facade of the Church of St-Trophime",
        year: "c. 1180",
        location: "Arles",
        srcs: ['trophime.jpg']
    },

    //19a
    {
        title: "Porch of the North Transept of Chartres Cathedral",
        year: "1194",
        srcs: ['chartres_north_transept.jpg']
    },

    //19b
    {
        title: "Porch of the North Transept of Chartres Cathedral (Detail)",
        year: "1194",
        srcs: ['chartres_north_transept_detail.jpg']
    },

    //20
    {
        title: "Annunciation from the Infancy of Christ Window, Chartres Cathedral",
        year: "mid-12th century",
        srcs: ['chartres_annunciation.jpg']
    },

    //21
    {
        title: "Amiens Cathedral",
        year: "c. 1218-47",
        srcs: ['amiens.jpg']
    },

    //22
    {
        title: "Sainte-Chapelle",
        location: "Paris",
        year: "1248",
        srcs: ['sainte_chapelle.jpg']
    },

    //23
    {
        title: "St George",
        artist: "Donatello",
        year: "c. 1415-16",
        srcs: ['saint_george.jpg']
    },

    //24
    {
        title: "Holy Trinity",
        artist: "Masaccio",
        year: "c. 1425-28",
        srcs: ['masaccio_trinity.jpg']
    },

    //25
    {
        title: "Dome of Florence Cathedral",
        artist: "Brunelleschi",
        year: "c. 1420-36",
        srcs: ['florence_dome.jpg']
    },

    //26a
    {
        title: "Pazzi Chapel (Exterior)",
        artist: "Brunelleschi",
        year: "c. 1430",
        srcs: ['pazzi_exterior.jpg']
    },

    //26b
    {
        title: "Pazzi Chapel (Interior)",
        artist: "Brunelleschi",
        year: "c. 1430",
        srcs: ['pazzi_interior.jpg']
    },

    //27
    {
        title: "St. James on the Way to His Execution",
        artist: "Andrea Mantegna",
        year: "c. 1455",
        srcs: ['james_execution.jpg']
    },

    //28
    {
        title: "Constantine's Dream",
        artist: "Pierro della Francesca",
        year: "c. 1460",
        srcs: ['constantine.jpg']
    },

    //29
    {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: "1495-98",
        srcs: ['last_supper.jpg']
    },

    //30
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "c. 1502",
        srcs: ['mona_lisa.jpg']
    },

    //31
    {
        title: "Virgin in the Meadow",
        artist: "Raphael",
        year: "1505-6",
        srcs: ['virgin_in_the_meadow.jpg']
    },

    //32
    {
        title: "Ceiling of the Sistine Chapel",
        artist: "Michelangelo",
        year: "1508-12",
        srcs: ['sistine_ceiling.jpg']
    },

    //33
    {
        title: "The Nymph Galatea",
        artist: "Raphael",
        year: "c. 1512-14",
        srcs: ['galatea.jpg']
    },

    //34a
    {
        title: "Ghent Altarpiece (Open)",
        artist: "Jan van Eyck",
        year: "1432",
        srcs: ['ghent_open.jpg']
    },

    //34b
    {
        title: "Ghent Altarpiece (Closed)",
        artist: "Jan van Eyck",
        year: "1432",
        srcs: ['ghent_closed.jpg']
    },

    //35
    {
        title: "The Descent from the Cross",
        artist: "Rogier van der Weyden",
        year: "c. 1435",
        srcs: ['descent.jpg']
    },

    //36
    {
        title: "The Nativity",
        artist: "Albrecht Durer",
        year: "1504",
        srcs: ['durer_nativity.jpg']
    },

    //37
    {
        title: "Adam and Eve",
        artist: "Albrecht Durer",
        year: "1504",
        srcs: ['durer_adam_and_eve.jpg']
    },

    //38a
    {
        title: "Isenheim Altarpiece - The Crucifixion",
        artist: "Matthias Grunewald",
        year: "1515",
        srcs: ['isenheim_crucifixion.jpg']
    },

    //38b
    {
        title: "Isenheim Altarpiece",
        artist: "Matthias Grunewald",
        year: "1515",
        srcs: ['isenheim_resurrection.jpg']
    },

    //39
    {
        title: "Danube Landscape",
        artist: "Albrecht Altdorfer",
        year: "c. 1526-28",
        srcs: ['danube.jpg']
    },
]