package com.example.myProject.controller;


import com.example.myProject.model.DoubleData;
import com.example.myProject.service.DoubleDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DoubleDataController {

    @Autowired
    private DoubleDataService doubleDataService;


    @PostMapping("/DoubleData")
    public DoubleData postDoubleData( @RequestBody  DoubleData doubleData){
        return doubleDataService.saveDoubleData(doubleData);
    }
}
