
class Ocean {
    //this is the whole point of TypeScript that you dont have to do this let oceanObject = this; //mmmm!?
    upperBoardBound: number = 10;
    firstShip: boolean = false;
    shipsBoard: Array<Array<EmptySea>>;

    constructor() {
        for (var row = 0; row < this.upperBoardBound; row++) {
            var shipsColumn = new Array();
            for (var column = 0; column < this.upperBoardBound; column++) {
                shipsColumn.push(new EmptySea());
            }
            this.shipsBoard.push(shipsColumn);
        }
    }

    shotsFired: number = 0;
    shipsSunk = 0;
    hitCount = 0;

    isOccupied(row: number, col: number, ocean: Ocean): boolean {
        var ships = ocean.shipsBoard;
        return ships[row][col].getShipType() != 'EmptySea';
    }
    getFirstShip(): boolean {
        return this.firstShip;
    }

    setShotsFired() {
        this.shotsFired++;
    };
    getHitCount() {
        return this.hitCount;
    };
    getShipsSunk() {
        var ships = this.shipsBoard;
        var shipsSunk = 0;
        //unique objects in ships
        for (var row = 0; row < 10; row++) {
            for (var column = 0; column < 10; column++) {
                console.log(ships[row][column].sunk);
                if (ships[row][column].sunk)
                    shipsSunk++;
            }
        }
        return shipsSunk;
    };
    isGameOver() {
        var gameOver = false;
        if (this.getShipsSunk() == 20)
            gameOver = true;
        return gameOver;
    };

    setFirstShip(arg) {
        this.firstShip = arg;
    };
    getShipArray() {
    	  	console.log("this ships array:" + this.shipsBoard);
      		return this.shipsBoard;
    };  //or
    toString() {
        return this.formatBoardForConsole();
    }
    //placeOnBoard(row: number, column: number, horizontal: boolean, ocean: Ocean) {
    /*setBowColumn(column: number): void {
        this.bowColumn = column;
    };  */
    aRandomColumn(horizontal: boolean, length: number, ocean: Ocean): number {
        let randomColumn;
        if (horizontal) {
            randomColumn = ocean.getRandomIntInclusive(0, 9);
        } else {
            randomColumn = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
        }
        return randomColumn;
    }

    aRandomRow(horizontal: boolean, length: number, ocean: Ocean): number {
        let randomRow;
        if (horizontal) {
            randomRow = ocean.getRandomIntInclusive(0, 9);
        } else {
            randomRow = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
        }
        return randomRow;
    };
    //duplicated from splaceAllshipsrandomlyscope refactor later
    getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //this is wrong TrisCorp.BattleShips.Ocean.prototype.placeAllShipsRandomly = function() { , need as below
    placeAllShipsRandomly(): void {
        console.log("in placeAllShipsRandomly");
        var ships = ['battleship', 'cruiser', 'destroyer', 'submarine'];
        // moved thjis lot to where it is used, so we can get around scope issues!
        let battleship = new BattleShip();
        let cruiser1 = new Cruiser();
        let cruiser2 = new Cruiser();
        let destroyer1 = new Destroyer();
        let destroyer2 = new Destroyer();
        let destroyer3 = new Destroyer();
        let submarine1 = new Submarine();
        let submarine2 = new Submarine();
        let submarine3 = new Submarine();
        let submarine4 = new Submarine();

        function loopThrUShipTypes(element, index, array) {
            var horizontal = false;
            switch (element) {
                case 'battleship':
                    console.log(' a battleship');
                    horizontal = aRandomBool();
                    var row = aRandomRow(horizontal, battleship.getLength(), this);
                    var column = aRandomColumn(horizontal, battleship.getLength(), this);
                    battleship.placeShipAt(row, column, horizontal, this);
                    break;
                case 'cruiser':
                    console.log(' a cruiser');
                    horizontal = aRandomBool();
                    var row = aRandomRow(horizontal, cruiser1.getLength(), this);
                    var column = aRandomColumn(horizontal, cruiser1.getLength(), this);
                    cruiser1.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, cruiser2.getLength(), this);
                    column = aRandomColumn(horizontal, cruiser2.getLength(), this);
                    cruiser2.placeShipAt(row, column, horizontal, this);
                    break;
                case 'destroyer':
                    console.log('a destroyer');
                    horizontal = aRandomBool();
                    var row = aRandomRow(horizontal, destroyer1.getLength(), this);
                    var column = aRandomColumn(horizontal, destroyer1.getLength(), this);
                    destroyer1.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, destroyer2.getLength(), this);
                    column = aRandomColumn(horizontal, destroyer2.getLength(), this);
                    destroyer2.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, destroyer3.getLength(), this);
                    column = aRandomColumn(horizontal, destroyer3.getLength(), this);
                    destroyer3.placeShipAt(row, column, horizontal, this);
                    break;
                case 'submarine':
                    console.log('a submarine');
                    horizontal = aRandomBool();
                    var row = aRandomRow(horizontal, submarine1.getLength(), this);
                    var column = aRandomColumn(horizontal, submarine1.getLength(), this);
                    submarine1.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, submarine2.getLength(), this);
                    column = aRandomColumn(horizontal, submarine2.getLength(), this);
                    submarine2.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, submarine3.getLength(), this);
                    column = aRandomColumn(horizontal, submarine3.getLength(), this);
                    submarine3.placeShipAt(row, column, horizontal, this);
                    horizontal = aRandomBool();
                    row = aRandomRow(horizontal, submarine4.getLength(), this);
                    column = aRandomColumn(horizontal, submarine4.getLength(), this);
                    submarine4.placeShipAt(row, column, horizontal, this);
                    break;
            }

            //for now duplicate in the parent scope - sort later
            function aRandomColumn(horizontal, length, ocean) {
                let randomColumn;
                if (horizontal) {
                    randomColumn = getRandomIntInclusive(0, 9);
                } else {
                    randomColumn = getRandomIntInclusive(0, ocean.upperBoardBound - length);
                }
                return randomColumn;
            }
            //for now duplicate in the parent scope - sort later
            function aRandomRow(horizontal, length, ocean) {
                let randomRow;
                if (horizontal) {
                    randomRow = getRandomIntInclusive(0, 9);
                } else {
                    randomRow = getRandomIntInclusive(0, ocean.upperBoardBound - length);
                }
                return randomRow;
            }

            function aRandomBool() {
                return Math.random() < .5;
            }
            //for now duplicate in the parent scope - sort later
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }

        //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        ships.forEach(loopThrUShipTypes);
    };

    shootAt(row: number, column: number, ocean: Ocean) {
        var hit = false;
        ocean.setShotsFired();
        var ships = ocean.shipsBoard;// equiv ships[row][column]
        var ship = ships[row][column];
        if (ocean.isOccupied(row, column, ocean)) {
            if (!ship.isSunk()) {
                hit = ship.shootAt(row, column)
                this.hitCount++
            } else {
                hit = false
            }
        } else {  //assume its an empty sea
            if (ship.getShipType() == "EmptySea") {
                //no need to cast as GROOVY ((EmptySea) ship).setFiredAt()
                ship.setFiredAt();
            }
        }
        return hit;
    };

    formatBoardForConsole(): string {
        //basic renderer
        var s = "";
        var ships = this.shipsBoard;
        console.log('format board');

        ships.map(function (e, i) {
            e.map(function (ee, j) {
                console.log("row:" + i + " col:" + j + " " + ee + " " + this.getSymbolForShipState(ee, i, j));
                s += this.getSymbolForShipState(ee, i, j);
            })
        });
        return s.replace(/(..........)/g, "$1<br />");
    }

    getSymbolForShipState(ship: any, row: number, col: number) {

        var replacementSymbolFragment = '.';
        if (ship.getShipType() == "EmptySea") {    //is it emptysea? is it hit?  then show - no? then show .
            if (ship.getFiredAt())
                replacementSymbolFragment = '-';
            else
                replacementSymbolFragment = '.';
        } else { //must be a ship
            if (ship.isHorizontal()) { //check row col subtract bowcol from col, get index from hit array, is it true? show x
                var hit = ship.getHit();
                if (hit[col - ship.getBowColumn()])
                    replacementSymbolFragment = 'x';
            }
            if (!ship.isHorizontal()) { //it's vertical
                var hit = ship.getHit();
                if (hit[row - ship.getBowRow()])
                    replacementSymbolFragment = 'x';
            }
            if (ship.isSunk()) {
                replacementSymbolFragment = 'S';
            }
        }
        return replacementSymbolFragment;
    }

    showBlankBoard() {
        /*todo StringBuilder sb1 = new StringBuilder()
        (1..10).each {
            sb1.append('+-+-+-+-+-+-+-+-+-+-+\n')
            sb1.append('| | | | | | | | | | |\n')
        }
        sb1.append('+-+-+-+-+-+-+-+-+-+-+')

        return sb1*/
    }
}

abstract class Ship {
    protected name: string;
    protected bowRow: number;
    protected length: number;
    protected bowColumn: number;
    protected horizontal: boolean;
    protected symbol: string;
    protected hit: boolean[];
    sunk: boolean;
    protected shipType: string;
    protected string: string;

    setSunk(sunk: boolean): void {
        this.sunk = sunk;
    }
    isHorizontal(): boolean {
        return this.horizontal;
    };
    setHorizontal(horizontal: boolean): void {
        this.horizontal = horizontal;
    };
    getBowRow(): number {
        return this.bowRow;
    };
    setBowRow(row: number): void {
        this.bowRow = row;
    };
    getBowColumn(): number {
        return this.bowColumn;
    };
    setBowColumn(column: number): void {
        this.bowColumn = column;
    };
    getShipType(): string {
        return this.shipType;
    };
    getLength(): number {
        return this.length;
    };
    getHit(): boolean[] {
        return this.hit;
    };
    determineIfShipIsSunk(): boolean {
        function isSunk(element, index, array) {
            return element;
        };
        return this.hit.every(isSunk);
    };
    toString(): string {
        return this.string;
    };
    placeShipAt(row: number, column: number, horizontal: boolean, ocean: Ocean) {
        this.setHorizontal(horizontal);
        var placed = false;
        while (!placed) {
            var valid = this.okToPlaceShipAt(row, column, horizontal, ocean);
            if (valid) {
                this.placeOnBoard(row, column, horizontal, ocean);
                placed = true;
            } else {
                row = ocean.aRandomRow(horizontal, this.getLength(), ocean);
                column = ocean.aRandomColumn(horizontal, this.getLength(), ocean);
            }
        }
    };
    okToPlaceShipAt(row: number, column: number, horizontal: boolean, ocean: Ocean): boolean {
        var valid = true;

        if (ocean.getFirstShip()) {
            ocean.setFirstShip(false);
        }

        if (!this.isEmpty(row, column, horizontal, ocean)) {
            valid = false;
            return valid;
        }

        let ships = ocean.shipsBoard;

        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
                try {
                    if (ocean.shipsBoard[row][column + i].getShipType() != 'EmptySea') {
                        valid = false;
                        return valid;
                    }
                } catch (e) {
                    return false;
                }
            } else {
                try {
                    if (ocean.shipsBoard[row + i][column].getShipType() != 'EmptySea') {
                        valid = false;
                        return valid;
                    }
                } catch (e) {
                    return false;
                }
            }
        }
        return valid;
    };
    isEmpty(row: number, column: number, horizontal: boolean, ocean: Ocean) {
        var ships = ocean.shipsBoard;
        length = this.getLength();
        var empty = true;
        var peekRow = row - 1;
        var peekColumn = column - 1;

        if (horizontal) {
            while (peekRow < row + 2) {
                try {
                    while (peekColumn < column + length + 2) {
                        try {
                            if (ships[peekRow][peekColumn].getShipType() != 'EmptySea') {
                                empty = false;
                            }
                            peekColumn++;
                        }
                        catch (e) {
                            peekColumn++;
                        }
                    }
                    peekColumn = column - 1;
                    peekRow++;
                }
                catch (e) {
                    peekRow++;
                }
            }
        }
        else {
            //vertical
            while (peekRow < row + length + 1) {
                try {
                    while (peekColumn < column + 2) {
                        try {
                            if (ships[peekRow][peekColumn].getShipType() != 'EmptySea') {
                                empty = false;
                            }
                            peekColumn++;
                        }
                        catch (e) {
                            peekColumn++;
                        }
                    }
                    peekColumn = column - 1;
                    peekRow++;
                }
                catch (e) {
                    peekRow++;
                }
            }
        }
        return empty;
    };
    placeOnBoard(row: number, column: number, horizontal: boolean, ocean: Ocean) {
        var ships = ocean.shipsBoard;
        this.setBowRow(row);
        this.setBowColumn(column);
        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
                ships[row][column + i] = <any>this;
            } else {
                ships[row + i][column] = <any>this;
            }
        }
    };
    shootAt(row: number, column: number): boolean {
        var directHit = false;
        if (this.horizontal) {
            for (var i = 0; i < this.getLength(); i++) {
                if ((this.bowRow == row) && (this.bowColumn + i == column)) {
                    directHit = true;
                    this.hit[i] = true;
                }
            }
        } else {
            for (var i = 0; i < this.getLength(); i++) {
                if ((this.bowRow + i == row) && (this.bowColumn == column)) {
                    directHit = true;
                    this.hit[i] = true;
                }
            }
        }
        this.setSunk(this.determineIfShipIsSunk());
        return directHit;
    };

}
class BattleShip extends Ship {

    constructor() {
        super();
        this.length = 4;
        this.shipType = 'BattleShip';
        this.hit = [false, false, false, false];
        this.string = "B";
    }
}
class Cruiser extends Ship {

    constructor() {
        super();
        this.length = 3;
        this.shipType = 'Cruiser';
        this.hit = [false, false, false];
        this.string = "C";
    }
}
class Destroyer extends Ship {

    constructor() {
        super();
        this.length = 2;
        this.shipType = 'Destroyer';
        this.hit = [false, false];
        this.string = "D";
    }
}
class Submarine extends Ship {

    constructor() {
        super();
        this.length = 1;
        this.shipType = 'Submarine';
        this.hit = [false];
        this.string = "S";
    }
}
class EmptySea extends Ship {
    firedAt: boolean = false;

    constructor() {
        super();
        this.length = 1;
        this.shipType = 'EmptySea';
        this.hit = [false, false, false];
        this.string = "E";
    }

    isSunk(): boolean {
        return false;
    };
    shootAt(row, column): boolean {
        return false;
    };
    getFiredAt(): boolean { //can lose this when refactoring
        return this.firedAt;
    };
    setFiredAt(): void { //can lose this when refactoring
        this.firedAt = true;
    };
}


