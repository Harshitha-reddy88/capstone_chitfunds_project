package com.example.myProject.controller;


import com.example.myProject.model.ExploreData;
import com.example.myProject.service.ExploreDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExploreDataController {

    @Autowired
    ExploreDataService exploreDataService;

    @GetMapping("/exploreData")
    public List<ExploreData> getAllExploreData(){return exploreDataService.getAllExploreData();}
}
