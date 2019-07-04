package common.server.repository;

import common.server.domain.Candidat;
import common.server.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
}
