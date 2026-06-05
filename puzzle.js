import { Chess } from "https://esm.sh/chess.js"
import { Chessboard, FEN } from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/Chessboard.js"

let moves = null
async function GET() {
    try {
        const response = await fetch("https://lichess.org/api/puzzle/daily")
        if (!response.ok) {throw new Error(`HTTPS error! ${response.status}`)}
        const data = await response.json()
        moves = data.game.pgn
    }
    catch (error) {console.error(error)}
}
await GET()
moves = moves.split(" ")

const puzzle = new Chess()
moves.forEach(movePlease)
function movePlease(value, index, array) {puzzle.move(value)}
console.log(puzzle.ascii())
console.log(puzzle.fen())

/*const board = new Chessboard(document.getElementById("board"), {
    position: puzzle.fen(),
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard/assets/",
    //extensions: [{class: Markers}]
    })
    board.enableMoveInput(inputHandler)
    function inputHandler(event) {
        console.log(event)
        if(event.type === INPUT_EVENT_TYPE.moveInputStarted || event.type === INPUT_EVENT_TYPE.validateMoveInput) {return true}
    }*/