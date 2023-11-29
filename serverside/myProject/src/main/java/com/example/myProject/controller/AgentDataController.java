package com.example.myProject.controller;


import com.example.myProject.model.AgentData;
import com.example.myProject.service.AgentDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AgentDataController {

    @Autowired
    private AgentDataService agentDataService;

    @PostMapping("/agentData")
    public AgentData postAgentData(@RequestBody AgentData agentData){
        return agentDataService.saveAgentData(agentData);
    }
}
