package com.example.myProject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="agent_data")
public class AgentData {

    @Id
    @Column(name="agentDataId")
    private int agentDataId;

    @Column(name="agentDataChitValue")
    private int agentDataChitValue;

    public int getAgentDataId() {
        return agentDataId;
    }

    public void setAgentDataId(int agentDataId) {
        this.agentDataId = agentDataId;
    }

    public int getAgentDataChitValue() {
        return agentDataChitValue;
    }

    public void setAgentDataChitValue(int agentDataChitValue) {
        this.agentDataChitValue = agentDataChitValue;
    }

    public int getAgentDataMonths() {
        return agentDataMonths;
    }

    public void setAgentDataMonths(int agentDataMonths) {
        this.agentDataMonths = agentDataMonths;
    }

    public int getAgentDataSubscription() {
        return agentDataSubscription;
    }

    public void setAgentDataSubscription(int agentDataSubscription) {
        this.agentDataSubscription = agentDataSubscription;
    }

    @Column(name="agentDataMonths")
    private int agentDataMonths;

    @Column(name="agentDataSubscription")
    private int agentDataSubscription;
}
