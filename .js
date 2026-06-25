/*
import {Chess, WHITE, BLACK, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING} from "https://esm.sh/chess.js"
import {Chessboard, FEN, INPUT_EVENT_TYPE as IET} from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/Chessboard.js"
import {Markers, MARKER_TYPE} from "https://cdn.jsdelivr.net/npm/cm-chessboard/src/extensions/markers/Markers.js"
import {notationConverter, castlingConverter} from "./basicNotationConverter.js"

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
        const response = await fetch("https://lichess.org/api/puzzle/6KDMa")
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

let legalMoves = []
let convertedLegalMoves = []
let currentMove = 0
let isCastling = false
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
            legalMoves = puzzle.moves({square: event.squareFrom})
            for (let i = 0; i < legalMoves.length; i++) {
                if (legalMoves[i].includes("-") && !isCastling) {isCastling = true}
                if (!isCastling) {convertedLegalMoves[i] = notationConverter(legalMoves[i])}
                else {convertedLegalMoves[i] = castlingConverter(legalMoves[i], puzzle.turn())}
                console.log(legalMoves[i], convertedLegalMoves[i])
            }
            if (!convertedLegalMoves.includes(event.squareTo)) {break}
            if (event.squareFrom + event.squareTo !== solution[currentMove]) {
                document.getElementById("result").style = "color: red; font-size: medium"
                document.getElementById("result").innerText = "WRONG MOVE!!!"
                break
            }
            if (isCastling) {
                switch (event.squareTo) {
                    case "g1": board.movePiece("h1", "f1", true)
                    case "c1": board.movePiece("a1", "d1", true)
                    case "g8": board.movePiece("h8", "f8", true)
                    case "c8": board.movePiece("a8", "d8", true)
                }
                isCastling = false
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
            console.log(board.getPosition())
            move = false
            console.log(isCastling)
            document.getElementById("result").style = "color: green; font-size: medium"
            document.getElementById("result").innerText = "Best move! Keep going..."
            puzzle.load(board.getPosition)
            convertedLegalMoves = ""
        }
        else {
            board.disableMoveInput()
            document.getElementById("result").style = "color: green; font-size: medium"
            document.getElementById("result").innerText = "Congrats! You have completed the puzzle!"
        }
    }
}, puzzle.turn())

 // Concerns: check piece for validate moves... maybe confirm move is correct is better though
//*/

import {Chess} from "chess.js"

const match = new Chess()
console.log(match.moves({square: "e2"}))