package com.example.bus_nav.Service;

import com.example.bus_nav.entity.Bus;

import java.util.List;

public interface BusService {
    public Bus saveBus(Bus bus);
    public List<Bus> getAllBus();
}
