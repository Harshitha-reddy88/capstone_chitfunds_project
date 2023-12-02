package com.example.myProject.repository;

import com.example.myProject.model.ChitData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChitDataRepository extends JpaRepository<ChitData,Integer> {
}
