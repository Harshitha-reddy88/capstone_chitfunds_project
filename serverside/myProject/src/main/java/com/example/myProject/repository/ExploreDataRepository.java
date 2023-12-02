package com.example.myProject.repository;

import com.example.myProject.model.ExploreData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExploreDataRepository extends JpaRepository<ExploreData,Integer> {
}
