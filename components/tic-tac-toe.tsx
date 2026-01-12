"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Player = "X" | "O" | null

export function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const winner = calculateWinner(board)
  const currentPlayer = isXNext ? "X" : "O"

  const handleClick = (index: number) => {
    if (board[index] || winner || gameOver) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)
    setIsXNext(!isXNext)

    // Check if it's a draw
    if (newBoard.every((cell) => cell !== null) && !calculateWinner(newBoard)) {
      setGameOver(true)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setGameOver(false)
  }

  let status = ""
  if (winner) {
    status = `Winner: ${winner}`
  } else if (gameOver) {
    status = "It's a draw!"
  } else {
    status = `Next player: ${currentPlayer}`
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Status Display */}
      <div className="text-xl font-semibold text-center min-h-[2rem]">
        {winner && <span className="text-success">{status}</span>}
        {gameOver && !winner && <span className="text-muted-foreground">{status}</span>}
        {!winner && !gameOver && <span className="text-foreground">{status}</span>}
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-[320px] mx-auto">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="aspect-square bg-secondary hover:bg-accent transition-colors rounded-lg flex items-center justify-center text-4xl font-bold disabled:cursor-not-allowed border-2 border-border"
            disabled={!!cell || !!winner || gameOver}
          >
            {cell && <span className={cell === "X" ? "text-primary" : "text-accent-foreground"}>{cell}</span>}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <Button onClick={resetGame} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        New Game
      </Button>
    </div>
  )
}

function calculateWinner(board: Player[]): Player {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}
