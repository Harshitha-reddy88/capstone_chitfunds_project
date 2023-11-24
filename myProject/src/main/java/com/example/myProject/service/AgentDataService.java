package com.example.myProject.service;

import com.example.myProject.model.AgentData;
import com.example.myProject.repository.AgentDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentDataService {

    @Autowired
    private AgentDataRepository agentDataRepository;

    public AgentData saveAgentData(AgentData agentData){
        return agentDataRepository.save(agentData);
    }
}
