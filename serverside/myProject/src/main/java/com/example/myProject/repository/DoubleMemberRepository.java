package com.example.myProject.repository;

import com.example.myProject.model.DoubleMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoubleMemberRepository extends JpaRepository<DoubleMember,Integer> {
}
