package common.server.repository;

import common.server.domain.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {


	Result findByCandidatAccountUsername(String username);
}
