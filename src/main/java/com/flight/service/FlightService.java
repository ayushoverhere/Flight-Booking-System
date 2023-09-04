package com.flight.service;

import com.flight.model.Flight;

public interface FlightService {

    void saveOrUpdate(Flight flight);

    Iterable<Flight> listAll();

    void deleteFlight(String id);

    Flight getFlightById(String flightId);
}
