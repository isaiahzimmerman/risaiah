const music = [
    //Naxos 1
    {
        src: "vivaldi_spring.mp3",
        artist: "Vivaldi",
        work: "The Four Seasons - Spring",
        tags: [
            tags.CLASSICAL
        ],
        // movement: "",
        year: "1725"
    },
    
    //Naxos 2
    {
        src: "haydn_90_I.mp3",
        artist: "Haydn",
        work: "90th Symphony",
        movement: "I (First)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1788"
    },

    //Naxos 3
    {
        src: "haydn_88_I.mp3",
        artist: "Haydn",
        work: "88th Symphony",
        movement: "I (First)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1787"
    },

    //Naxos 4
    {
        src: "haydn_88_II.mp3",
        artist: "Haydn",
        work: "88th Symphony",
        movement: "II (Second)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1787"
    },

    //Naxos 5
    {
        src: "haydn_88_III.mp3",
        artist: "Haydn",
        work: "88th Symphony",
        movement: "III (Third)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1787"
    },

    //Naxos 6
    {
        src: "haydn_88_IV.mp3",
        artist: "Haydn",
        work: "88th Symphony",
        movement: "IV (Fourth)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1787"
    },

    //Naxos 7
    {
        src: "haydn_80_I.mp3",
        artist: "Haydn",
        work: "80th Symphony",
        movement: "I (First)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1784"
    },

    //Naxos 8
    {
        src: "haydn_45_I.mp3",
        artist: "Haydn",
        work: "45th Symphony",
        movement: "I (First)",
        tags: [
            tags.CLASSICAL
        ],
        year: "1772"
    },

    //Naxos 9
    {
        src: "mozart_figaro_2_aria.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "2",
        scene: `Aria (Cavatina), "Porgi, amor"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 10
    {
        src: "mozart_figaro_2_finale_1.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "2",
        scene: `Finale, "Esci, ormai"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 11
    {
        src: "mozart_figaro_2_finale_2.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "2",
        scene: `Finale, "Signore, di fuori"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 12
    {
        src: "mozart_figaro_1_overture.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "1",
        scene: "Overture (Sinfonia)",
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 13
    {
        src: "mozart_figaro_1_aria_ballare.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "1",
        scene: `Aria (Cavatina), "Se vuol ballare, signor contino"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 14
    {
        src: "mozart_figaro_1_aria_non.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "1",
        scene: `Aria, "Non piu andrai"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 15
    {
        src: "mozart_figaro_4_finale.mp3",
        artist: "Mozart",
        work: "Le Nozze di Figaro",
        act: "4",
        scene: `Finale, "Gente, gente, all'armi, all'armi"`,
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
        year: "1786",
    },

    //Naxos 16
    {
        src: "beethoven_5_I.mp3",
        artist: "Beethoven",
        work: "5th Symphony",
        movement: "I (First)",
        year: "1808",
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
    },

    //Naxos 17
    {
        src: "beethoven_5_II.mp3",
        artist: "Beethoven",
        work: "5th Symphony",
        movement: "II (Second)",
        year: "1808",
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
    },

    //Naxos 18
    {
        src: "beethoven_5_III.mp3",
        artist: "Beethoven",
        work: "5th Symphony",
        movement: "III (Third)",
        year: "1808",
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
    },

    //Naxos 19
    {
        src: "beethoven_5_IV.mp3",
        artist: "Beethoven",
        work: "5th Symphony",
        movement: "IV (Fourth)",
        year: "1808",
        tags: [
            tags.CLASSICAL,
            tags.EXAM3,
        ],
    },
    
    //Naxos 20
    {
        src: "sibelius_reverie.mp3",
        artist: "Jean Sibelius",
        work: "Reverie, Op. 58, No. 1",
        year: "1909",
        tags: [
            tags.ROMANTIC_MODERN,
            tags.FINAL,
        ],
    },

    //Naxos 21
    {
        src: "ives_concord.mp3",
        artist: "Charles Ives",
        work: `Piano Sonata No. 2, Concord, Masachusetts, mvt. 3, "The Alcotts"`,
        year: "1916-1917",
        tags: [
            tags.ROMANTIC_MODERN,
            tags.FINAL,
        ],
    },

    //Naxos 22
    {
        src: "borenstein_will.mp3",
        artist: "Nimrod Borenstein",
        work: "If you will it, it is no dream",
        year: "2012",
        tags: [
            tags.ROMANTIC_MODERN,
            tags.FINAL,
        ],
    },
]