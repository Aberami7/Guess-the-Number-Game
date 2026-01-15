package app;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private int attempts;
    private Integer number;      // nullable for now
    private Boolean correct;     // nullable for now
    private Integer timeTaken;   // in seconds

    @CreationTimestamp
    private LocalDateTime datePlayed;

    public Score() {}

    public Score(String username, int attempts, Integer number, Boolean correct, Integer timeTaken) {
        this.username = username;
        this.attempts = attempts;
        this.number = number;
        this.correct = correct;
        this.timeTaken = timeTaken;
    }

    // Getters and setters
    public int getId() { return id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public int getAttempts() { return attempts; }
    public void setAttempts(int attempts) { this.attempts = attempts; }

    public Integer getNumber() { return number; }
    public void setNumber(Integer number) { this.number = number; }

    public Boolean getCorrect() { return correct; }
    public void setCorrect(Boolean correct) { this.correct = correct; }

    public Integer getTimeTaken() { return timeTaken; }
    public void setTimeTaken(Integer timeTaken) { this.timeTaken = timeTaken; }

    public LocalDateTime getDatePlayed() { return datePlayed; }
    public void setDatePlayed(LocalDateTime datePlayed) { this.datePlayed = datePlayed; }
}
