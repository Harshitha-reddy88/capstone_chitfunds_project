package com.example.myProject.repository;

import com.example.myProject.model.AgentData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgentDataRepository extends JpaRepository<AgentData,Integer> {
}
