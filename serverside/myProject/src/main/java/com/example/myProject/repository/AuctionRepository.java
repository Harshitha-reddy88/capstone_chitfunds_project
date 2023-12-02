package com.example.myProject.repository;

import com.example.myProject.model.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction,Integer> {
}
