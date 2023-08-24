/**********************
 * REAL-LIFE EXAMPLES *
 **********************/

// 1) Continuation Token from an API

const getAWSProductIdImages = async () => {
    // get the data with await fetch request
    if (data.IsTruncated) {
        // recursive
        return await getAWSProductIdImages(
            productId,
            s3, // connection to s3
            resultArray, // accumulator
            data.NextContinuationToken
        )
    }
    return resultArray
}

// 2) A Parser:
// a company directory
// a file directory
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT music, etc.
const artistsByGenre = {
    jazz: ['Miles Davis', 'John Coltrane'],
    rock: {
        classic: ['Bob Seger', 'The Eagles'],
        hair: ['Def Leppard', 'Whitesnake', 'Poison'],
        alt: {
            classic: ['Pearl Jam', 'The Killers'],
            current: ['Joywave', 'Sir Sly']
        }
    },
    unclassified: {
        new: ['Caamp', 'Neil Young'],
        classic: ['Seal', 'Morcheeba', 'Chris Stapleton']
    }
}

const getArtistNames = (dataObject, array = []) => {
    Object.keys(dataObject).forEach(key => {
        if (Array.isArray(dataObject[key])) {
            return dataObject[key]
            .forEach(artist => array.push(artist))
        }
        getArtistNames(dataObject[key], array)
    })
    return array
}

console.log(getArtistNames(artistsByGenre).join('\n'))