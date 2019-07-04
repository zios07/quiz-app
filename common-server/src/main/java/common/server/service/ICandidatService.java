package common.server.service;

import common.server.domain.Candidat;
import common.server.exception.NotFoundException;

import java.util.List;

public interface ICandidatService {

	Candidat addCandidat(Candidat candidat);

	Candidat findCandidat(long id) throws NotFoundException;

	List<Candidat> findAllCandidats();

	void deleteCandidat(long id) throws NotFoundException;

	List<Candidat> searchCandidats(Candidat candidat);
	
}
