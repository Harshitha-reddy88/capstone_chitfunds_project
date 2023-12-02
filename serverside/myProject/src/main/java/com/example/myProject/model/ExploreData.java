package com.example.myProject.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="exploreData")
public class ExploreData {

    @Id
    @Column(name="id")
    private int id;

    @Column(name="process_name")
    private String process_name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProcess_name() {
        return process_name;
    }

    public void setProcess_name(String process_name) {
        this.process_name = process_name;
    }

    public String getProcess_data() {
        return process_data;
    }

    public void setProcess_data(String process_data) {
        this.process_data = process_data;
    }

    public String getProcess_img() {
        return process_img;
    }

    public void setProcess_img(String process_img) {
        this.process_img = process_img;
    }

    @Column(name ="process_data")
    private String process_data;

    @Column(name = "process_img")
    private String process_img;
}
