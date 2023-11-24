package com.example.myProject.repository;

import com.example.myProject.model.AgentMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgentMemberRepository extends JpaRepository<AgentMember,Integer> {
}
