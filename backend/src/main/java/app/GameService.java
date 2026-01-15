package app;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class GameService {

    private int target; // target number
    private int attempts;
    private boolean started = false;
    private LocalDateTime startTime; // NEW: track start time
    private static final int MAX_ATTEMPTS = 10;

    // Start / restart the game
    public void startGame() {
        Random rand = new Random();
        target = rand.nextInt(100) + 1; // 1 to 100
        attempts = 0;
        started = true;
        startTime = LocalDateTime.now(); // record start time
    }

    // Guess logic with validation
    public String makeGuess(int guess) {

        if (!started) {
            return "⚠ Game not started!";
        }

        if (guess < 1 || guess > 100) {
            return "⚠ Enter a number between 1 and 100";
        }

        if (attempts >= MAX_ATTEMPTS) {
            return "❌ Attempt limit exceeded! Restart game.";
        }

        attempts++;

        if (guess < target) {
            return "Higher!";
        } else if (guess > target) {
            return "Lower!";
        } else {
            return "Correct!";
        }
    }

    public int getAttempts() {
        return attempts;
    }

    public int getTarget() {
        return target;
    }

    public boolean isGameOver() {
        return attempts >= MAX_ATTEMPTS;
    }

    public boolean isGameStarted() {
        return started;
    }

    // NEW: Getter for start time
    public LocalDateTime getStartTime() {
        return startTime;
    }
}
