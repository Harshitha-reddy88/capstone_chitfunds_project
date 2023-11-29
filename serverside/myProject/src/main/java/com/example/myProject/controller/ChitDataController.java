package com.example.myProject.controller;


import com.example.myProject.model.ChitData;
import com.example.myProject.service.ChitDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ChitDataController {

    @Autowired
    private ChitDataService chitDataService;

    @PostMapping("/addData")
    public ChitData postData(@RequestBody ChitData chitData){
        return chitDataService.saveData(chitData);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteFunction(@PathVariable int id){
        return chitDataService.deleteData(id);
    }
}
