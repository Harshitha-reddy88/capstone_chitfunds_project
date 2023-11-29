package com.example.myProject.controller;


import com.example.myProject.model.Data;
import com.example.myProject.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class DataController {

    @Autowired
    DataService dataService;


    @GetMapping("/data")
    public List<Data> getAllData(){
        return dataService.getAllData();
    }

    @GetMapping("/search/{id}")
    public Data fetchDataById(@PathVariable int id){
        return dataService.getDataById(id);
    }

}
