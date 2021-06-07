from tetris.tetris import Tetris

def main():
    tetris = Tetris(dim=16)

    tetris.getNextPiece()
    for i in range(20):
        tetris.timeStep()

    print(tetris.field)

if __name__ == "__main__":
    main()