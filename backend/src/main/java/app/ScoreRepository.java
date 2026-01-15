package app;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Integer> {
    // Top 5 players: fewest attempts, fastest time, earliest date
    List<Score> findTop5ByOrderByAttemptsAscTimeTakenAscDatePlayedAsc();
}
