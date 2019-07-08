package common.server.rest;

import com.google.gson.Gson;
import common.server.domain.Candidat;
import common.server.domain.Document;
import common.server.exception.NotFoundException;
import common.server.service.ICandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/candidats")
public class CandidatController {

    @Autowired
    private ICandidatService service;

    @GetMapping(value = "{id}")
    public ResponseEntity<Candidat> findCandidat(@PathVariable long id) throws NotFoundException {
        Candidat candidat = service.findCandidat(id);
        return new ResponseEntity<>(candidat, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Candidat>> findAllCandidats() {
        List<Candidat> candidats = service.findAllCandidats();
        return new ResponseEntity<>(candidats, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Candidat> addCandidat(@RequestParam("candidat") String strCandidat, @RequestParam("resume") MultipartFile resume) throws IOException {
        Candidat candidat = new Gson().fromJson(strCandidat, Candidat.class);
        Document document = new Document(resume.getBytes(),resume.getOriginalFilename());
        candidat.setDocument(document);
        Candidat savedCandidat = service.addCandidat(candidat);
        return new ResponseEntity<Candidat>(savedCandidat, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deleteCandidat(@PathVariable long id) throws NotFoundException {
        service.deleteCandidat(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/search")
    public ResponseEntity<List<Candidat>> searchCandidats(@RequestBody Candidat candidatDto) throws NotFoundException {
        List<Candidat> candidats = service.searchCandidats(candidatDto);
        return new ResponseEntity<>(candidats, HttpStatus.OK);
    }


}
