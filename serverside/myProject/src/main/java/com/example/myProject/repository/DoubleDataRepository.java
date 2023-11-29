package com.example.myProject.repository;

import com.example.myProject.model.DoubleData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoubleDataRepository extends JpaRepository<DoubleData,Integer> {
}
