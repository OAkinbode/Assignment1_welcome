import { TicTacToe } from "@/components/tic-tac-toe"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Welcome Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Welcome to WebDev 2 Class</h1>
          <p className="text-xl md:text-2xl text-success font-medium text-balance">
            Congratulations on completing your first assignment!
          </p>
        </div>

        {/* Tic Tac Toe Game Frame */}
        <div className="bg-card border-2 border-border rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-foreground">Play Tic-Tac-Toe</h2>
          <TicTacToe />
        </div>
      </div>
    </main>
  )
}
