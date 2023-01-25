/**
 * @param {string[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
    let matrix = {};
    for (let i = 0; i < 9; i++) {
        let columnMap = {};
        let rowMap = {};

        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") {
                if (columnMap[board[j][i]]) return false;
                columnMap[board[j][i]] = true;
            }

            if (board[i][j] !== ".") {
                if (rowMap[board[i][j]]) return false;
                rowMap[board[i][j]] = true;

                const grid = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

                if (!matrix[grid]) matrix[grid] = {};
                if (matrix[grid][board[i][j]]) return false;
                matrix[grid][board[i][j]] = true;
            }
        }
    }
    return true;
};

let board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(isValidSudoku(board));