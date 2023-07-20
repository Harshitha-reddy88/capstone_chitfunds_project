package com.chitfundsProject.service.Impl;
import com.chitfundsProject.model.BankDetails;
import com.chitfundsProject.repository.BankDetailsRepository;
import com.chitfundsProject.service.BankDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankDetailsServiceimpl implements BankDetailsService {

    @Autowired
    BankDetailsRepository BankDetailsRepository;
    @Override
    public BankDetails create (BankDetails BankDetails){return BankDetailsRepository.save(BankDetails);}
}
