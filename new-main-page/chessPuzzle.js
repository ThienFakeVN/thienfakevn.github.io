import {Chess, WHITE, BLACK, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING} from "https://esm.sh/chess.js"
import {Chessboard, FEN, INPUT_EVENT_TYPE as IET} from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/Chessboard.js"
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

let currentMove = 0
let move = false
// board.addMarker(MARKER_TYPE.dot, "e4")
board.setPosition(position)
board.setOrientation(puzzle.turn())
document.getElementById("asWhom").textContent += (puzzle.turn() === "w") ? "White!" : "Black!"
board.enableMoveInput((event) => {
    console.log(event)
    switch (event.type) {
        case IET.moveInputStarted: return true
        case IET.validateMoveInput:
            //if () {}
            if (event.squareFrom + event.squareTo !== solution[currentMove]) {
                document.getElementById("result").style = "color: red; font-size: medium"
                document.getElementById("result").innerText = "WRONG MOVE!"
                break
            }
            currentMove += 1
            move = true
            return true
        case IET.moveInputCanceled: break
        case IET.moveInputFinished: break
        case IET.movingOverSquare: break
    }
    if (move) {
        if (currentMove + 1 <= solution.length) {
            board.movePiece(solution[currentMove].slice(0, 2), solution[currentMove].slice(2), true)
            currentMove += 1
            move = false
            document.getElementById("result").style = "color: green; font-size: medium"
            document.getElementById("result").innerText = "Correct move! You shall continue..."
        }
        else {
            board.disableMoveInput()
            document.getElementById("result").style = "color: green; font-size: medium"
            document.getElementById("result").innerText = "Congrats! You completed the puzzle!"
        }
    }
}, puzzle.turn())

 // Concerns: check piece for validate moves... maybe confirm move is correct is better though
//*/
