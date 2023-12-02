package com.example.myProject.service;

import com.example.myProject.model.Data;
import com.example.myProject.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {
    @Autowired
    DataRepository dataRepository;


    public List<Data> getAllData() {
        return dataRepository.findAll();
    }

    public Data getDataById(int id){
        return dataRepository.findById(id).orElse(null);
    }

}
