package com.example.myProject.controller;

import com.example.myProject.model.AgentMember;
import com.example.myProject.service.AgentMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AgentMemberController {
    @Autowired
    private AgentMemberService agentMemberService;

    @PostMapping("/agentMember")
    public AgentMember postAgentMember(@RequestBody AgentMember agentMember){
        return agentMemberService.saveAgentMember(agentMember);
    }
}
