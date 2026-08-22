function notationConverter(move = new String()) {
    let partlyConvertedMove = move.replace(/[+#x]/g, "")
    let promotedTo = ""
    if (partlyConvertedMove.includes("=")) {promotedTo = partlyConvertedMove[partlyConvertedMove.length - 1].toLowerCase()}
    let convertedMove = partlyConvertedMove.replace(/[RNBQK=]/g, "")
    if ("abcdefgh12345678".includes(convertedMove[0]) && convertedMove.length === 3 && promotedTo === "") {convertedMove = convertedMove.slice(1)}
    if (convertedMove.length === 4) {convertedMove = convertedMove.slice(2)}
    if (convertedMove.length === 3) {convertedMove = convertedMove.slice(1)}
    return convertedMove + promotedTo
}

function castlingConverter(move = new String(), turn = new String()) {
    switch (turn) {
        case "w":
            if (move.length === 3) {return "g1"}
            else {return "c1"}
        case "b":
            if (move.length === 3) {return "g8"}
            else {return "c8"}
    }
}

export {notationConverter, castlingConverter}
