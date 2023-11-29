package com.example.myProject.service;


import com.example.myProject.model.ChitData;
import com.example.myProject.repository.ChitDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChitDataService {


    @Autowired
    private ChitDataRepository chitDataRepository;

    public ChitData saveData(ChitData chitData){
        return chitDataRepository.save(chitData);
    }

    public String deleteData(int id){
        chitDataRepository.deleteById(id);
        return "deleted";
    }
}
