package com.example.myProject.model;

import javax.persistence.*;


@Entity
@Table(name="doubleData")
public class DoubleData {

    @Id
    @Column(name="doubleDataid")
    private int doubleDataid;

    @Column(name="doubleDataChitValue")
    private int doubleDataChitValue;

    @Column(name="doubleDataMonths")
    private int doubleDataMonths;


    @Column(name="doubleDataSubscription")
    private int doubleDataSubscription;

    public int getDoubleDataid() {
        return doubleDataid;
    }

    public void setDoubleDataid(int doubleDataid) {
        this.doubleDataid = doubleDataid;
    }

    public int getDoubleDataChitValue() {
        return doubleDataChitValue;
    }

    public void setDoubleDataChitValue(int doubleDataChitValue) {
        this.doubleDataChitValue = doubleDataChitValue;
    }

    public int getDoubleDataMonths() {
        return doubleDataMonths;
    }

    public void setDoubleDataMonths(int doubleDataMonths) {
        this.doubleDataMonths = doubleDataMonths;
    }

    public int getDoubleDataSubscription() {
        return doubleDataSubscription;
    }

    public void setDoubleDataSubscription(int doubleDataSubscription) {
        this.doubleDataSubscription = doubleDataSubscription;
    }
}
