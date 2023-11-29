package com.example.myProject.repository;

import com.example.myProject.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DataRepository extends JpaRepository<Data,Integer > {
}
