package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.BusRepository;
import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.entity.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BusServiceImpl implements BusService{


    @Autowired
    private BusRepository busRepository;
    @Override
    public Bus saveBus(Bus bus) {
        return busRepository.save(bus);
    }

    @Override
    public List<Bus> getAllBus() {
        return busRepository.findAll();
    }
}
