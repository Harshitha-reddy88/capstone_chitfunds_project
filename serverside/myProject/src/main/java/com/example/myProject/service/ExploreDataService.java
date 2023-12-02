package com.example.myProject.service;


import com.example.myProject.model.ExploreData;
import com.example.myProject.repository.ExploreDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.theme.CookieThemeResolver;

import java.util.List;

@Service
public class ExploreDataService {

    @Autowired
    ExploreDataRepository exploreDataRepository;

    public List<ExploreData> getAllExploreData(){return exploreDataRepository.findAll();}


}
