package common.server.domain;

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

    @OneToMany
    private List<Question> questions;

    @OneToOne
    private Result result;

    public Quiz() {
    }

    public Quiz(List<Question> questions, Result result, String label, String level) {
        this.questions = questions;
        this.result = result;
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

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
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
