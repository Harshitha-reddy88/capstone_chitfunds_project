package com.example.myProject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="agent_member")
public class AgentMember {

    @Id
    @Column(name="agentMemberId")
    private int agentMemberId;

    @Column(name="agentMemberName")
    private String agentMemberName;

    @Column(name="agentMemberAge")
    private int agentMemberAge;

    @Column(name="agentMemberAddress")
    private String agentMemberAddress;

    public int getAgentMemberId() {
        return agentMemberId;
    }

    public void setAgentMemberId(int agentMemberId) {
        this.agentMemberId = agentMemberId;
    }

    public String getAgentMemberName() {
        return agentMemberName;
    }

    public void setAgentMemberName(String agentMemberName) {
        this.agentMemberName = agentMemberName;
    }

    public int getAgentMemberAge() {
        return agentMemberAge;
    }

    public void setAgentMemberAge(int agentMemberAge) {
        this.agentMemberAge = agentMemberAge;
    }

    public String getAgentMemberAddress() {
        return agentMemberAddress;
    }

    public void setAgentMemberAddress(String agentMemberAddress) {
        this.agentMemberAddress = agentMemberAddress;
    }

    public int getAgentMemberAmount() {
        return agentMemberAmount;
    }

    public void setAgentMemberAmount(int agentMemberAmount) {
        this.agentMemberAmount = agentMemberAmount;
    }

    public String getAgentMemberPhoneNumber() {
        return agentMemberPhoneNumber;
    }

    public void setAgentMemberPhoneNumber(String agentMemberPhoneNumber) {
        this.agentMemberPhoneNumber = agentMemberPhoneNumber;
    }

    @Column(name="agentMemberAmount")
    private int agentMemberAmount;

    @Column(name="agentMemberPhoneNumber")
    private String agentMemberPhoneNumber;
}
