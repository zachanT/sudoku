import {useState} from "react";
import { Board } from "./components/Board";

// Returns an array that represents an easy Sudoku board
const boardPicker = () => {
    const starters = [["5","3","","","7","","","","","6","","","1","9","5","","","","","9","8","","","","","6","","8","","","","6","","","","3","4","","","8","","3","","","1","7","","","","2","","","","6","","6","","","","","2","8","","","","","4","1","9","","","5","","","","","8","","","7","9"], ["","","","7","4","","","","6","4","","6","8","","","5","","7","7","","","","9","","","","4","","3","","9","8","4","7","","","8","2","","6","1","3","4","","9","","4","","","","","3","","","","6","2","3","7","","","","5","","","5","4","","9","","","","","7","","","6","1","2","","8"]];
    let i = Math.floor(Math.random() * starters.length);
    return starters[i];
}

const App = () => {
    const [squares, setSquares] = useState(()=>boardPicker());
    //var squares = ["5","3","4","6","7","8","9","1","2","6","7","2","1","9","5","3","4","8","1","9","8","3","4","2","5","6","7","8","5","9","7","6","1","4","2","3","4","2","6","8","5","3","7","9","1","7","1","3","9","2","4","8","5","6","9","6","1","5","3","7","2","8","4","2","8","7","4","1","9","6","3","5","3","4","5","2","8","6","1","7","9"]

    const handleInput = (e, id) => {
        const board = squares.slice();
        if(e.nativeEvent.data == null) {
            board[id] = "";
            console.log("null")
        } else {
            console.log("not null")
            board[id] = e.nativeEvent.data;
        }
        setSquares(board);
        console.log(squares[id]);
    }

    const checkSolved = () => {
        const col = {}
        const row = {}
        const gridObj = {}

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                const num = squares[r*9 + c]
                //console.log(num)
                if (num === "") {
                    alert("Puzzle is incomplete!")
                    return false
                }
                // row checking
                if (!row[r]) row[r] = new Set()
                if (row[r].has(num)) {
                     alert("Something isn't quite right...")
                     return false
                }
                else row[r].add(num)

                // col checking
                if (!col[c]) col[c] = new Set()
                if (col[c].has(num)) {
                    alert("Something isn't quite right...")
                    return false
                }
                else col[c].add(num)

                // area checking
                const index = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if (!gridObj[index]) gridObj[index] = new Set()
                if (gridObj[index].has(num)) return false
                else gridObj[index].add(num)
            }
        }
        alert("Puzzle Solved!");
        return true
    }

    return (
      <div className="App">
          <Board 
            squares={squares}
            onChange={handleInput}
          />
          <button onClick={() => checkSolved()}>Check if Solved</button>
      </div>
    );
}
  
export default App;
  