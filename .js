import {Chessboard, FEN, INPUT_EVENT_TYPE} from "./path/to/Chessboard.js"
import {Markers} from "./path/to/extensions/markers/Markers.js"

const board = new Chessboard(document.getElementById("board"), {
        position: FEN.start,
        assetsUrl: "../assets/",
        extensions: [{class: Markers}] // Looks better with markers. (Don't forget to also include the CSS for the markers)
    })

    board.enableMoveInput(inputHandler) // This enables the move input

    function inputHandler(event) {
        console.log(event)
        if(event.type === INPUT_EVENT_TYPE.moveInputStarted || 
                event.type === INPUT_EVENT_TYPE.validateMoveInput) {
            return true // false cancels move
        }
    }