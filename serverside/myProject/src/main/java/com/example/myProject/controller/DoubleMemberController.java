package com.example.myProject.controller;

import com.example.myProject.model.DoubleMember;
import com.example.myProject.service.DoubleMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DoubleMemberController {

    @Autowired
    private DoubleMemberService doubleMemberService;

    @PostMapping("/DoubleMember")
    public DoubleMember postDoubleMember(@RequestBody DoubleMember doubleMember){
        return doubleMemberService.saveDoubleMember(doubleMember);
    }


}
