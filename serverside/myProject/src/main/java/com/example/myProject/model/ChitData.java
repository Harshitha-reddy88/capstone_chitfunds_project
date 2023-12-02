package com.example.myProject.model;


import jdk.jfr.DataAmount;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="chitData")

public class ChitData {

    @Id
    @Column(name="sno")
    private int sno;

    @Column(name="chitValue")
    private int chitValue;

    public int getSno() {
        return sno;
    }

    public void setSno(int sno) {
        this.sno = sno;
    }

    public int getChitValue() {
        return chitValue;
    }

    public void setChitValue(int chitValue) {
        this.chitValue = chitValue;
    }

    public int getNumMonths() {
        return numMonths;
    }

    public void setNumMonths(int numMonths) {
        this.numMonths = numMonths;
    }

    public int getMonthlySubscription() {
        return monthlySubscription;
    }

    public void setMonthlySubscription(int monthlySubscription) {
        this.monthlySubscription = monthlySubscription;
    }

    @Column(name="numMonths")
    private int numMonths;

    @Column(name="monthlySubscription")
    private int monthlySubscription;

}
