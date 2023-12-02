package com.example.myProject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="chitfunds")
public class Data {

    @Id
    @Column(name="id")
    private int id;

    @Column(name="Image1")
    private String Image1;

    @Column(name="Image2")
    private String Image2;

    @Column(name="Image3")
    private String Image3;

    @Column(name="Details1")
    private String Details1;

    @Column(name="Details2")
    private String Details2;

    @Column(name="Details3")
    private String Details3;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage1() {
        return Image1;
    }

    public void setImage1(String Image1) {
        this.Image1 = Image1;
    }

    public String getImage2() {
        return Image2;
    }

    public void setImage2(String Image2) {
        this.Image2 = Image2;
    }

    public String getImage3() {
        return Image3;
    }

    public void setImage3(String Image3) {
        this.Image3 = Image3;
    }

    public String getDetails1() {
        return Details1;
    }

    public void setDetails1(String Details1) {
        this.Details1 = Details1;
    }

    public String getDetails2() {
        return Details2;
    }

    public void setDetails2(String Details2) {
        this.Details2 = Details2;
    }

    public String getDetails3() {
        return Details3;
    }

    public void setDetails3(String Details3) {
        this.Details3 = Details3;
    }

}
