package common.server.domain;

import javax.persistence.*;

@Entity
@Table(name = "DOCUMENT_TABLE")
public class Document {

    @Id
    @GeneratedValue
    private long id;

    @Lob
    private byte[] content;

    private String name;

    public Document() {}
    public Document(byte[] content, String name) {
        this.content = content;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

