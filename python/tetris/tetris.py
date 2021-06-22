from .colors import colors, backgroundColor
from .shapes import shapes
import random
import time

class Tetris:

    def __init__(self, dim=16):
        self.dim = dim
        self.backgroundColor = backgroundColor
        self.field = [[backgroundColor for x in range(dim)] for y in range(dim)]
        self.currentShape = {}
        self.currentColor = backgroundColor
        self.currentPiecePosition = [0, 0]

    def timeStep(self):
        print("step")
        if(self.currentShape == None):
            self.getNextPiece()
            if(self.checkPieceLanded()):
                print("landed")

                lines = self.getFullLines()
                if(len(lines) > 0):
                    self.blinkLines(lines)
                    self.removeLines(lines)
                
                if(self.isPieceAtTopOfDisplay()):
                    self.blinkAllLines()
                    self.clearDisplay()

                self.currentShape = None
        else:
            self.lowerPiece(1)
            if(self.checkPieceLanded()):
                print("landed")
                lines = self.getFullLines()
                if(len(lines) > 0):
                    self.blinkLines(lines)
                    self.removeLines(lines)
                self.currentShape = None

        #check to move sideways

        #check to turn piece

    def turnPiece(self):
        pass

    def movePieceSideways(self):
        pass

    def lowerPiece(self, lines=1):
        print(f"piece is {self.currentShape}")
        for j in range(len(self.currentShape[0])):
            for i in range(len(self.currentShape)):
                if(self.currentShape[i][j] == 1 and (i == 0 or self.currentShape[i-1][j] == 0)):
                    self.field[self.currentPiecePosition[0] + i][self.currentPiecePosition[1] + j] = backgroundColor
                    print(f"erased {self.currentPiecePosition[0] + i} / {self.currentPiecePosition[1] + j}")
            for i in range(len(self.currentShape)):
                if(self.currentShape[i][j] == 1 and (i == (len(self.currentShape) - 1) or self.currentShape[i+1][j] == 0)):
                    self.field[self.currentPiecePosition[0] + i + 1][self.currentPiecePosition[1] + j] = self.currentColor
                    print(f"colored {self.currentPiecePosition[0] + i} / {self.currentPiecePosition[1] + j}")
        self.currentPiecePosition[0] += 1

    def getColoredCoordiantesOfCurrentPiece(self):
        coordinates = []
        for j in range(len(self.currentShape[0])):
            for i in range(len(self.currentShape)):
                if(self.currentShape[i][j] == 1):
                    coordinates.append([i + self.currentPiecePosition[0], j + self.currentPiecePosition[1]])
        return coordinates

    def blinkCurrentPiece(self, times=4, speed=2):
        coordinates = getColoredCoordiantesOfCurrentPiece()
        for _ in range(times):
            for coordinate in coordinates:
                self.field[coordinate[0]][coordinate[1]] = backgroundColor
            time.sleep(1/speed)
            for coordinate in coordinates:
                self.field[coordinate[0]][coordinate[1]] = self.currentColor
            time.sleep(1/speed)

    def blinkLines(self, lines, times=4, speed=2):
        blankLine = [backgroundColor for x in range(self.dim)]
        coloredLines = []
        for line in lines:
            coloredLines.append(self.field(line))
        for _ in range(times):
            for line in lines:
                self.field[line] = blankLine
            time.sleep(1/speed)
            for line in lines:
                self.field[line] = coloredLines[line]
            time.sleep(1/speed)

    def blinkAllLines(self):
        lines = [i for i in range(len(self.field))]
        blink(lines)

    def checkPieceLanded(self):
        if(self.currentPiecePosition[0] + len(self.currentShape) - 1 >= 15):
            return True
        for j in range(len(self.currentShape[0])):
            for i in range(len(self.currentShape)):
                if(self.currentShape[i][j] > 0 and (i == (len(self.currentShape) - 1) or self.currentShape[i+1][j] == 0) and self.field[self.currentPiecePosition[0] + i + 1][self.currentPiecePosition[1] + j] != self.backgroundColor):
                    return True
        return False

    def getFullLines(self):
        fullLines = []
        for num, line in enumerate(self.field):
            emptyField = false
            for point in line:
                if (point == backgroundColor):
                    emptyField = True
                    break
            if (emptyField == false):
                fullLines.append(num)
        return fullLines

    def removeLines(self, lines):
        for line in lines:
            self.field.pop(line)
            self.field.insert(0, [backgroundColor for x in range(dim)])

    def isPieceAtTopOfDisplay(self):
        return self.currentPiecePosition[0] == 0

    def getNextPiece(self):
        index = random.randint(0, len(colors)-1)
        self.currentShape = shapes[index]
        self.currentColor = colors[index]
        self.initialCurrentPiece()
        print("got piece")

    def initialCurrentPiece(self):
        self.currentPiecePosition = [0, random.randint(0, self.dim-len(self.currentShape[0]))]
        for i in range(len(self.currentShape)):
            for j in range(len(self.currentShape[0])):
                if (self.currentShape[i][j] == 1):
                    self.field[self.currentPiecePosition[0] + i][self.currentPiecePosition[1] + j] = self.currentColor
                    print(f"colored {self.currentPiecePosition[0] + i} / {self.currentPiecePosition[1] + j}")

    def resetDisplay(self):
        for i in range(len(self.field)):
            for j in range(len(self.field[i])):
                self.field[i][j] = backgroundColor

    def render(self):
        pass