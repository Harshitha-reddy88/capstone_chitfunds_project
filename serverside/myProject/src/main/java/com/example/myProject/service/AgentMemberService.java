package com.example.myProject.service;


import com.example.myProject.model.AgentMember;
import com.example.myProject.repository.AgentMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentMemberService {
    @Autowired
    private AgentMemberRepository agentMemberRepository;

    public AgentMember saveAgentMember(AgentMember agentMember){
        return agentMemberRepository.save(agentMember);
    }
}
