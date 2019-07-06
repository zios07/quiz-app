package common.server.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "CANDIDAT_TABLE")
public class Candidat extends User{

    public Candidat() {
    }

    public Candidat(String firstName, String lastName, LocalDate bDate, Account account, Role role) {
        super(firstName, lastName, bDate, account, role);
    }
}
