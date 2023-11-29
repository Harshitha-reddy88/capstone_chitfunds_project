package com.example.myProject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="double_member")
public class DoubleMember {


    @Id
    @Column(name="doubleMemberId")
    private int doubleMemberId;

    @Column(name="doubleMemberName")
    private String doubleMemberName;

    @Column(name="doubleMemberAge")
    private int doubleMemberAge;

    @Column(name="doubleMemberAddress")
    private String doubleMemberAddress;

    @Column(name="doubleMemberAmount")
    private int doubleMemberAmount;

    public int getDoubleMemberId() {
        return doubleMemberId;
    }

    public void setDoubleMemberId(int doubleMemberId) {
        this.doubleMemberId = doubleMemberId;
    }

    public String getDoubleMemberName() {
        return doubleMemberName;
    }

    public void setDoubleMemberName(String doubleMemberName) {
        this.doubleMemberName = doubleMemberName;
    }

    public int getDoubleMemberAge() {
        return doubleMemberAge;
    }

    public void setDoubleMemberAge(int doubleMemberAge) {
        this.doubleMemberAge = doubleMemberAge;
    }

    public String getDoubleMemberAddress() {
        return doubleMemberAddress;
    }

    public void setDoubleMemberAddress(String doubleMemberAddress) {
        this.doubleMemberAddress = doubleMemberAddress;
    }

    public int getDoubleMemberAmount() {
        return doubleMemberAmount;
    }

    public void setDoubleMemberAmount(int doubleMemberAmount) {
        this.doubleMemberAmount = doubleMemberAmount;
    }

    public int getDoubleMemberPhoneNumber() {
        return doubleMemberPhoneNumber;
    }

    public void setDoubleMemberPhoneNumber(int doubleMemberPhoneNumber) {
        this.doubleMemberPhoneNumber = doubleMemberPhoneNumber;
    }

    @Column(name="doubleMemberPhoneNumber")
    private int doubleMemberPhoneNumber;
}
