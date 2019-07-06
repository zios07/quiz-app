package common.server.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "QUESTION_TABLE")
public class Question {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String value;

    private Boolean isMultiple;

    private String category;

    @ManyToOne
    @JsonBackReference
    private Quiz quiz;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Answer> answers;

    public Question() {

    }

    public Question(String name, String value, Boolean isMultiple, String category, Quiz quiz, List<Answer> answers) {
        this.name = name;
        this.value = value;
        this.isMultiple = isMultiple;
        this.category = category;
        this.quiz = quiz;
        this.answers = answers;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getMultiple() {
        return isMultiple;
    }

    public void setMultiple(Boolean multiple) {
        isMultiple = multiple;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}
