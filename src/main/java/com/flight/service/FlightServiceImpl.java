package com.flight.service;

import com.flight.model.Flight;
import com.flight.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository repository;

    @Override
    public void saveOrUpdate(Flight flight) {
        repository.save(flight);
    }

    @Override
    public Iterable<Flight> listAll() {
        return repository.findAll();
    }

    @Override
    public void deleteFlight(String id) {
        repository.deleteById(id);
    }

    @Override
    public Flight getFlightById(String flightId) {
        return repository.findById(flightId).orElse(null);
    }
}
