package common.server.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "CANDIDAT_TABLE")
public class Candidat extends User {

    private String post;

    private String skills;

    @OneToOne(cascade = CascadeType.ALL)
    private Document document;

    public Candidat() {

    }

    public Candidat(String post, String skills, Document document) {
        this.post = post;
        this.skills = skills;
        this.document = document;
    }

    public Candidat(String firstName, String lastName, LocalDate bDate, Account account, Role role, String post, String skills, Document document) {
        super(firstName, lastName, bDate, account, role);
        this.post = post;
        this.skills = skills;
        this.document = document;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }
}
