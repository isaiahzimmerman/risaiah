const tags = {
    EXAM1: 'Exam 1',
    EXAM2: 'Exam 2',
    EXAM3: 'Exam 3',
    FINAL: 'Final Exam',
    BAROQUE: 'Baroque',
    CLASSICAL: 'Classical',
    MUSIC: 'Music',
    ARTWORK: 'Artwork',
    ROMANTIC_MODERN: "Romantic/Modern",
}

function getTagsInverse(){
    const output = {}
    for(tag in tags){
        output[tags[tag]] = tag
    }
    return output
}

const tagsInverse = getTagsInverse()

const tagStructure = [
    [tags.EXAM1, tags.EXAM2, tags.EXAM3, tags.FINAL],
    // [tags.BAROQUE, tags.CLASSICAL, tags.ROMANTIC_MODERN],
    [tags.MUSIC, tags.ARTWORK]
]