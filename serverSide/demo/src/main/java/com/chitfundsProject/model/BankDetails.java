package com.chitfundsProject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class bankDetails {

    @Id
    private int user_id;

    @Column
    private String bank_name;

    @Column
    private int contact_number;

    @Column
    private String user_first_name;

    @Column
    private String user_second_name;

    @Column
    private String branch_name;

    @Column
    private int branch_number;

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }

    public int getContact_number() {
        return contact_number;
    }

    public void setContact_number(int contact_number) {
        this.contact_number = contact_number;
    }

    public String getUser_first_name() {
        return user_first_name;
    }

    public void setUser_first_name(String user_first_name) {
        this.user_first_name = user_first_name;
    }

    public String getUser_second_name() {
        return user_second_name;
    }

    public void setUser_second_name(String user_second_name) {
        this.user_second_name = user_second_name;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public int getBranch_number() {
        return branch_number;
    }

    public void setBranch_number(int branch_number) {
        this.branch_number = branch_number;
    }

    public String getBranch_address() {
        return branch_address;
    }

    public void setBranch_address(String branch_address) {
        this.branch_address = branch_address;
    }

    public String getAccount_type() {
        return account_type;
    }

    public void setAccount_type(String account_type) {
        this.account_type = account_type;
    }

    @Column
    private String branch_address;

    @Column
    private String account_type;
}
