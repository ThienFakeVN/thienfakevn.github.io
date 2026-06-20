import {Chess, WHITE, BLACK, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING} from "https://esm.sh/chess.js"
import {Chessboard, COLOR as COLOUR, FEN, INPUT_EVENT_TYPE as IET} from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/Chessboard.js"
import {Markers, MARKER_TYPE} from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/extensions/markers/Markers.js"

const board = new Chessboard(document.getElementById("board"), {
    position: FEN.start,
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard/assets/",
    extensions: [{class: Markers}]
})

let solution = null
let position = null
let initialPly = null
async function getPuzzle() {
    try {
        const response = await fetch("https://lichess.org/api/puzzle/daily")
        if (!response.ok) {throw new Error(`HTTPS error! ${response.status}`)}
        const data = await response.json()
        solution = data.puzzle.solution
        position = data.puzzle.fen
        initialPly = data.puzzle.initialPly
    }
    catch (error) {console.error(error)}
}

await getPuzzle()
const puzzle = new Chess()
puzzle.load(position)
console.log(puzzle.ascii())

board.setPosition(position)
board.setOrientation(puzzle.turn())
let currentMove = 0
// board.addMarker(MARKER_TYPE.dot, "e4")
board.enableMoveInput((event) => {
    console.log(event)
    switch (event.type) {
        case IET.moveInputStarted:
            console.log(`moveInputStarted: ${event.squareFrom}`)
            return true
        case IET.validateMoveInput:
            console.log(`validateMoveInput: ${event.squareFrom}${event.squareTo}`)
            if (event.squareFrom + event.squareTo !== solution[currentMove]) {break}
            console.log("Ist valid!")
            currentMove + 2
            return true
        case IET.moveInputCanceled:
            console.log(`moveInputCanceled`)
            break
        case IET.moveInputFinished:
            console.log(`moveInputFinished`)
            break
        case IET.movingOverSquare:
            console.log(`movingOverSquare: ${event.squareTo}`)
            break
    }
}, puzzle.turn()) // Concerns: check piece for validate moves... maybe confirm move is correct is better though
//*/
