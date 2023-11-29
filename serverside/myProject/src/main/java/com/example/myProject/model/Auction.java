package com.example.myProject.model;

import javax.persistence.*;


@Entity
@Table(name="auction_member")
public class Auction {

    @Id
    @Column(name="auctionMemberSno")
    private int auctionMemberSno;

    @Column(name="auctionMemberName")
    private String auctionMemberName;

    @Column(name="auctionMemberAge")
    private int auctionMemberAge;

    @Column(name="auctionMemberAddress")
    private String auctionMemberAddress;


    public int getAuctionMemberSno() {
        return auctionMemberSno;
    }

    public void setAuctionMemberSno(int auctionMemberSno) {
        this.auctionMemberSno = auctionMemberSno;
    }

    public String getAuctionMemberName() {
        return auctionMemberName;
    }

    public void setAuctionMemberName(String auctionMemberName) {
        this.auctionMemberName = auctionMemberName;
    }

    public int getAuctionMemberAge() {
        return auctionMemberAge;
    }

    public void setAuctionMemberAge(int auctionMemberAge) {
        this.auctionMemberAge = auctionMemberAge;
    }

    public String getAuctionMemberAddress() {
        return auctionMemberAddress;
    }

    public void setAuctionMemberAddress(String auctionMemberAddress) {
        this.auctionMemberAddress = auctionMemberAddress;
    }

    public int getAuctionMemberAmount() {
        return auctionMemberAmount;
    }

    public void setAuctionMemberAmount(int auctionMemberAmount) {
        this.auctionMemberAmount = auctionMemberAmount;
    }

    public int getAuctionMemberPhoneNumber() {
        return auctionMemberPhoneNumber;
    }

    public void setAuctionMemberPhoneNumber(int auctionMemberPhoneNumber) {
        this.auctionMemberPhoneNumber = auctionMemberPhoneNumber;
    }

    @Column(name="auctionMemberAmount")
    private int auctionMemberAmount;

    @Column(name="auctionMemberPhoneNumber")
    private int auctionMemberPhoneNumber;
}
