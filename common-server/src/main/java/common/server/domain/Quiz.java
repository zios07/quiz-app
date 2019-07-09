package common.server.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "QUIZ_TABLE")
public class Quiz {

    @Id
    @GeneratedValue
    private long id;

    private String label;

    private String level;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.EAGER)
    private List<Question> questions;

    public Quiz() {
    }

    public Quiz(List<Question> questions, Result result, String label, String level) {
        this.questions = questions;
        this.label = label;
        this.level = level;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
