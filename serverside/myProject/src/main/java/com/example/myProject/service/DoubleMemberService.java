package com.example.myProject.service;

import com.example.myProject.model.DoubleMember;
import com.example.myProject.repository.DoubleMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoubleMemberService {

    @Autowired
    private DoubleMemberRepository doubleMemberRepository;

    public DoubleMember saveDoubleMember(DoubleMember doubleMember){
        return doubleMemberRepository.save(doubleMember);
    }
}
