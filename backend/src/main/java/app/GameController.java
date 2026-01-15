package app;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 🎮 GameController handles all backend endpoints for the Guess The Number game:
 * - /api/start → start/restart the game
 * - /api/guess → submit guess
 * - /api/leaderboard → get top scores
 */

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // allow all frontends to access
public class GameController {

    @Autowired
    private GameService gameService;

    @Autowired
    private ScoreRepository scoreRepository;

    // Start / restart the game
    @PostMapping("/start")
    public String startGame() {
        gameService.startGame();
        System.out.println("Game started! Target: " + gameService.getTarget());
        return "Game Started!";
    }

    // Submit a guess — transactional ensures DB consistency
    @PostMapping("/guess")
    @Transactional
    public String guess(@RequestParam int guess,
                        @RequestParam String username) {

        if (username == null || username.isEmpty()) {
            return "⚠ Username is required!";
        }

        if (!gameService.isGameStarted()) {
            return "⚠ Please start the game first!";
        }

        System.out.println("User " + username + " guessed: " + guess);

        String result = gameService.makeGuess(guess);
        System.out.println("Result: " + result + " | Attempts: " + gameService.getAttempts());

        // Save score if Correct
        if ("Correct!".equals(result)) {
            // Calculate time taken in seconds
            int timeTaken = 0;
            if (gameService.getStartTime() != null) {
                timeTaken = (int) java.time.Duration.between(
                    gameService.getStartTime(),
                    java.time.LocalDateTime.now()
                ).getSeconds();
            }

            Score s = new Score(
                username,
                gameService.getAttempts(),
                gameService.getTarget(),
                true,
                timeTaken
            );
            scoreRepository.save(s);
            System.out.println("Saved to DB: " + username 
                + ", number: " + gameService.getTarget() 
                + ", attempts: " + gameService.getAttempts() 
                + ", timeTaken: " + timeTaken + "s");
        }

        return result + " (Attempts: " + gameService.getAttempts() + ")";
    }

    // Leaderboard — top 5 by attempts & time taken
    @GetMapping("/leaderboard")
    public List<Score> leaderboard() {
        List<Score> list = scoreRepository.findTop5ByOrderByAttemptsAscTimeTakenAscDatePlayedAsc();
        System.out.println("Leaderboard fetched: " + list.size() + " entries");
        return list;
    }
}
