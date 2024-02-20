package com.example.bus_nav.Controller;

import com.example.bus_nav.Service.BusService;
import com.example.bus_nav.entity.Bus;
import com.example.bus_nav.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class  BusController {

    @Autowired
    private BusService busService;


    @PostMapping("/add")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.saveBus(bus);
    }
    @GetMapping("/getAll")
    public List<Bus> getAllBus(){
        return busService.getAllBus();
    }
}
