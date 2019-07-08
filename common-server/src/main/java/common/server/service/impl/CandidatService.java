package common.server.service.impl;

import common.server.domain.Candidat;
import common.server.exception.NotFoundException;
import common.server.repository.CandidatRepository;
import common.server.service.ICandidatService;
import common.server.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatService implements ICandidatService {

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public Candidat addCandidat(Candidat candidat) {
        candidat.setRole(roleService.getRoleUser());
        candidat.getAccount().setPassword(bCryptPasswordEncoder.encode(candidat.getAccount().getPassword()));
        return candidatRepository.save(candidat);
    }

    @Override
    public Candidat findCandidat(long id) {
        return candidatRepository.findById(id).get();
    }

    @Override
    public List<Candidat> findAllCandidats() {
        return candidatRepository.findAll();
    }

    @Override
    public void deleteCandidat(long id) throws NotFoundException {
        candidatRepository.deleteById(id);
    }

    @Override
    public List<Candidat> searchCandidats(Candidat candidat) {
        return candidatRepository.findAll();
    }
}
