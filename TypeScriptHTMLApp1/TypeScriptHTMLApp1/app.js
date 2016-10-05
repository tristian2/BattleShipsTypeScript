var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ocean = (function () {
    function Ocean() {
        //this is the whole point of TypeScript that you dont have to do this let oceanObject = this; //mmmm!?
        this.upperBoardBound = 10;
        this.firstShip = false;
        this.shotsFired = 0;
        this.shipsSunk = 0;
        this.hitCount = 0;
        for (var row = 0; row < this.upperBoardBound; row++) {
            var shipsColumn = new Array();
            for (var column = 0; column < this.upperBoardBound; column++) {
                shipsColumn.push(new EmptySea());
            }
            this.shipsBoard.push(shipsColumn);
        }
    }
    Ocean.prototype.isOccupied = function (row, col, ocean) {
        var ships = ocean.shipsBoard;
        return ships[row][col].getShipType() != 'EmptySea';
    };
    Ocean.prototype.getFirstShip = function () {
        return this.firstShip;
    };
    Ocean.prototype.setShotsFired = function () {
        this.shotsFired++;
    };
    ;
    Ocean.prototype.getHitCount = function () {
        return this.hitCount;
    };
    ;
    Ocean.prototype.getShipsSunk = function () {
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
    ;
    Ocean.prototype.isGameOver = function () {
        var gameOver = false;
        if (this.getShipsSunk() == 20)
            gameOver = true;
        return gameOver;
    };
    ;
    Ocean.prototype.setFirstShip = function (arg) {
        this.firstShip = arg;
    };
    ;
    Ocean.prototype.getShipArray = function () {
        console.log("this ships array:" + this.shipsBoard);
        return this.shipsBoard;
    };
    ;
    Ocean.prototype.toString = function () {
        return this.formatBoardForConsole();
    };
    //placeOnBoard(row: number, column: number, horizontal: boolean, ocean: Ocean) {
    /*setBowColumn(column: number): void {
        this.bowColumn = column;
    };  */
    Ocean.prototype.aRandomColumn = function (horizontal, length, ocean) {
        var randomColumn;
        if (horizontal) {
            randomColumn = ocean.getRandomIntInclusive(0, 9);
        }
        else {
            randomColumn = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
        }
        return randomColumn;
    };
    Ocean.prototype.aRandomRow = function (horizontal, length, ocean) {
        var randomRow;
        if (horizontal) {
            randomRow = ocean.getRandomIntInclusive(0, 9);
        }
        else {
            randomRow = ocean.getRandomIntInclusive(0, ocean.upperBoardBound - length);
        }
        return randomRow;
    };
    ;
    //duplicated from splaceAllshipsrandomlyscope refactor later
    Ocean.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ;
    //this is wrong TrisCorp.BattleShips.Ocean.prototype.placeAllShipsRandomly = function() { , need as below
    Ocean.prototype.placeAllShipsRandomly = function () {
        console.log("in placeAllShipsRandomly");
        var ships = ['battleship', 'cruiser', 'destroyer', 'submarine'];
        // moved thjis lot to where it is used, so we can get around scope issues!
        var battleship = new BattleShip();
        var cruiser1 = new Cruiser();
        var cruiser2 = new Cruiser();
        var destroyer1 = new Destroyer();
        var destroyer2 = new Destroyer();
        var destroyer3 = new Destroyer();
        var submarine1 = new Submarine();
        var submarine2 = new Submarine();
        var submarine3 = new Submarine();
        var submarine4 = new Submarine();
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
                var randomColumn;
                if (horizontal) {
                    randomColumn = getRandomIntInclusive(0, 9);
                }
                else {
                    randomColumn = getRandomIntInclusive(0, ocean.upperBoardBound - length);
                }
                return randomColumn;
            }
            //for now duplicate in the parent scope - sort later
            function aRandomRow(horizontal, length, ocean) {
                var randomRow;
                if (horizontal) {
                    randomRow = getRandomIntInclusive(0, 9);
                }
                else {
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
    ;
    Ocean.prototype.shootAt = function (row, column, ocean) {
        var hit = false;
        ocean.setShotsFired();
        var ships = ocean.shipsBoard; // equiv ships[row][column]
        var ship = ships[row][column];
        if (ocean.isOccupied(row, column, ocean)) {
            if (!ship.isSunk()) {
                hit = ship.shootAt(row, column);
                this.hitCount++;
            }
            else {
                hit = false;
            }
        }
        else {
            if (ship.getShipType() == "EmptySea") {
                //no need to cast as GROOVY ((EmptySea) ship).setFiredAt()
                ship.setFiredAt();
            }
        }
        return hit;
    };
    ;
    Ocean.prototype.formatBoardForConsole = function () {
        //basic renderer
        var s = "";
        var ships = this.shipsBoard;
        console.log('format board');
        ships.map(function (e, i) {
            e.map(function (ee, j) {
                console.log("row:" + i + " col:" + j + " " + ee + " " + this.getSymbolForShipState(ee, i, j));
                s += this.getSymbolForShipState(ee, i, j);
            });
        });
        return s.replace(/(..........)/g, "$1<br />");
    };
    Ocean.prototype.getSymbolForShipState = function (ship, row, col) {
        var replacementSymbolFragment = '.';
        if (ship.getShipType() == "EmptySea") {
            if (ship.getFiredAt())
                replacementSymbolFragment = '-';
            else
                replacementSymbolFragment = '.';
        }
        else {
            if (ship.isHorizontal()) {
                var hit = ship.getHit();
                if (hit[col - ship.getBowColumn()])
                    replacementSymbolFragment = 'x';
            }
            if (!ship.isHorizontal()) {
                var hit = ship.getHit();
                if (hit[row - ship.getBowRow()])
                    replacementSymbolFragment = 'x';
            }
            if (ship.isSunk()) {
                replacementSymbolFragment = 'S';
            }
        }
        return replacementSymbolFragment;
    };
    Ocean.prototype.showBlankBoard = function () {
        /*todo StringBuilder sb1 = new StringBuilder()
        (1..10).each {
            sb1.append('+-+-+-+-+-+-+-+-+-+-+\n')
            sb1.append('| | | | | | | | | | |\n')
        }
        sb1.append('+-+-+-+-+-+-+-+-+-+-+')

        return sb1*/
    };
    return Ocean;
}());
var Ship = (function () {
    function Ship() {
    }
    Ship.prototype.setSunk = function (sunk) {
        this.sunk = sunk;
    };
    Ship.prototype.isHorizontal = function () {
        return this.horizontal;
    };
    ;
    Ship.prototype.setHorizontal = function (horizontal) {
        this.horizontal = horizontal;
    };
    ;
    Ship.prototype.getBowRow = function () {
        return this.bowRow;
    };
    ;
    Ship.prototype.setBowRow = function (row) {
        this.bowRow = row;
    };
    ;
    Ship.prototype.getBowColumn = function () {
        return this.bowColumn;
    };
    ;
    Ship.prototype.setBowColumn = function (column) {
        this.bowColumn = column;
    };
    ;
    Ship.prototype.getShipType = function () {
        return this.shipType;
    };
    ;
    Ship.prototype.getLength = function () {
        return this.length;
    };
    ;
    Ship.prototype.getHit = function () {
        return this.hit;
    };
    ;
    Ship.prototype.determineIfShipIsSunk = function () {
        function isSunk(element, index, array) {
            return element;
        }
        ;
        return this.hit.every(isSunk);
    };
    ;
    Ship.prototype.toString = function () {
        return this.string;
    };
    ;
    Ship.prototype.placeShipAt = function (row, column, horizontal, ocean) {
        this.setHorizontal(horizontal);
        var placed = false;
        while (!placed) {
            var valid = this.okToPlaceShipAt(row, column, horizontal, ocean);
            if (valid) {
                this.placeOnBoard(row, column, horizontal, ocean);
                placed = true;
            }
            else {
                row = ocean.aRandomRow(horizontal, this.getLength(), ocean);
                column = ocean.aRandomColumn(horizontal, this.getLength(), ocean);
            }
        }
    };
    ;
    Ship.prototype.okToPlaceShipAt = function (row, column, horizontal, ocean) {
        var valid = true;
        if (ocean.getFirstShip()) {
            ocean.setFirstShip(false);
        }
        if (!this.isEmpty(row, column, horizontal, ocean)) {
            valid = false;
            return valid;
        }
        var ships = ocean.shipsBoard;
        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
                try {
                    if (ocean.shipsBoard[row][column + i].getShipType() != 'EmptySea') {
                        valid = false;
                        return valid;
                    }
                }
                catch (e) {
                    return false;
                }
            }
            else {
                try {
                    if (ocean.shipsBoard[row + i][column].getShipType() != 'EmptySea') {
                        valid = false;
                        return valid;
                    }
                }
                catch (e) {
                    return false;
                }
            }
        }
        return valid;
    };
    ;
    Ship.prototype.isEmpty = function (row, column, horizontal, ocean) {
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
    ;
    Ship.prototype.placeOnBoard = function (row, column, horizontal, ocean) {
        var ships = ocean.shipsBoard;
        this.setBowRow(row);
        this.setBowColumn(column);
        for (var i = 0; i < this.getLength(); i++) {
            if (horizontal) {
                ships[row][column + i] = this;
            }
            else {
                ships[row + i][column] = this;
            }
        }
    };
    ;
    Ship.prototype.shootAt = function (row, column) {
        var directHit = false;
        if (this.horizontal) {
            for (var i = 0; i < this.getLength(); i++) {
                if ((this.bowRow == row) && (this.bowColumn + i == column)) {
                    directHit = true;
                    this.hit[i] = true;
                }
            }
        }
        else {
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
    ;
    return Ship;
}());
var BattleShip = (function (_super) {
    __extends(BattleShip, _super);
    function BattleShip() {
        _super.call(this);
        this.length = 4;
        this.shipType = 'BattleShip';
        this.hit = [false, false, false, false];
        this.string = "B";
    }
    return BattleShip;
}(Ship));
var Cruiser = (function (_super) {
    __extends(Cruiser, _super);
    function Cruiser() {
        _super.call(this);
        this.length = 3;
        this.shipType = 'Cruiser';
        this.hit = [false, false, false];
        this.string = "C";
    }
    return Cruiser;
}(Ship));
var Destroyer = (function (_super) {
    __extends(Destroyer, _super);
    function Destroyer() {
        _super.call(this);
        this.length = 2;
        this.shipType = 'Destroyer';
        this.hit = [false, false];
        this.string = "D";
    }
    return Destroyer;
}(Ship));
var Submarine = (function (_super) {
    __extends(Submarine, _super);
    function Submarine() {
        _super.call(this);
        this.length = 1;
        this.shipType = 'Submarine';
        this.hit = [false];
        this.string = "S";
    }
    return Submarine;
}(Ship));
var EmptySea = (function (_super) {
    __extends(EmptySea, _super);
    function EmptySea() {
        _super.call(this);
        this.firedAt = false;
        this.length = 1;
        this.shipType = 'EmptySea';
        this.hit = [false, false, false];
        this.string = "E";
    }
    EmptySea.prototype.isSunk = function () {
        return false;
    };
    ;
    EmptySea.prototype.shootAt = function (row, column) {
        return false;
    };
    ;
    EmptySea.prototype.getFiredAt = function () {
        return this.firedAt;
    };
    ;
    EmptySea.prototype.setFiredAt = function () {
        this.firedAt = true;
    };
    ;
    return EmptySea;
}(Ship));
//# sourceMappingURL=app.js.map