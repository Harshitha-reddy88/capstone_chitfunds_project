package com.example.myProject.controller;


import com.example.myProject.model.Auction;
import com.example.myProject.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @PostMapping("/postAuction")
    public Auction postAuction(@RequestBody Auction auction){
        return auctionService.saveAuction(auction);
    }

}
