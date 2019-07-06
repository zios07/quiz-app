package common.server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RESULT_TABLE")
public class Result {

    @Id
    @GeneratedValue
    private long id;

    private String grade;

    private float score;

    private int nbCorrectAnswers;

    private int nbNonAnswered;

    private int nbWrongAnswers;

    public Result() {

    }

    public Result(String grade, float score, int nbCorrectAnswers, int nbNonAnswered, int nbWrongAnswers) {
        this.grade = grade;
        this.score = score;
        this.nbCorrectAnswers = nbCorrectAnswers;
        this.nbNonAnswered = nbNonAnswered;
        this.nbWrongAnswers = nbWrongAnswers;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public int getNbCorrectAnswers() {
        return nbCorrectAnswers;
    }

    public void setNbCorrectAnswers(int nbCorrectAnswers) {
        this.nbCorrectAnswers = nbCorrectAnswers;
    }

    public int getNbNonAnswered() {
        return nbNonAnswered;
    }

    public void setNbNonAnswered(int nbNonAnswered) {
        this.nbNonAnswered = nbNonAnswered;
    }

    public int getNbWrongAnswers() {
        return nbWrongAnswers;
    }

    public void setNbWrongAnswers(int nbWrongAnswers) {
        this.nbWrongAnswers = nbWrongAnswers;
    }
}
