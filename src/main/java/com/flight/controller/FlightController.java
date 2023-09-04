package com.flight.controller;

import com.flight.model.Flight;
import com.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/flight")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @PostMapping("/save")
    public String saveFlight(@RequestBody Flight flight) {
        flightService.saveOrUpdate(flight);
        return flight.get_id();
    }

    @GetMapping("/getall")
    public Iterable<Flight> getFlights() {
        return flightService.listAll();
    }

    @PutMapping("/edit/{id}")
    public Flight updateFlight(@RequestBody Flight flight, @PathVariable(name = "id") String _id) {
        flight.set_id(_id);
        flightService.saveOrUpdate(flight);
        return flight;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFlight(@PathVariable("id") String _id) {
        flightService.deleteFlight(_id);
    }

    @RequestMapping("/search/{id}")
    public Flight getFlight(@PathVariable(name = "id") String flightId) {
        return flightService.getFlightById(flightId);
    }
}
