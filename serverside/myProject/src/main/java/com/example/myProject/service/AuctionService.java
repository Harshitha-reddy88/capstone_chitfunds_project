package com.example.myProject.service;


import com.example.myProject.model.Auction;
import com.example.myProject.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuctionService {


    @Autowired
    private AuctionRepository auctionRepository;

    public Auction saveAuction(Auction auction){

        return auctionRepository.save(auction);
    }
}
