package com.example.myProject.service;

import com.example.myProject.model.DoubleData;
import com.example.myProject.repository.DoubleDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoubleDataService {

    @Autowired
    private DoubleDataRepository doubleDataRepository;

    public DoubleData saveDoubleData(DoubleData doubleData){
        return doubleDataRepository.save(doubleData);
    }


}
