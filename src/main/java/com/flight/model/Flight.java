package com.flight.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flights")
public class Flight {

    @Id
    private String _id;
    private String flightName;
    private String flightDestination;
    private double flightPrice;

    public Flight(String _id, String flightName, String flightDestination, double flightPrice) {
        this._id = _id;
        this.flightName = flightName;
        this.flightDestination = flightDestination;
        this.flightPrice = flightPrice;
    }

    public Flight() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getFlightName() {
        return flightName;
    }

    public void setFlightName(String flightName) {
        this.flightName = flightName;
    }

    public String getFlightDestination() {
        return flightDestination;
    }

    public void setFlightDestination(String flightDestination) {
        this.flightDestination = flightDestination;
    }

    public double getFlightPrice() {
        return flightPrice;
    }

    public void setFlightPrice(double flightPrice) {
        this.flightPrice = flightPrice;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "_id='" + _id + '\'' +
                ", flightName='" + flightName + '\'' +
                ", flightDestination='" + flightDestination + '\'' +
                ", flightPrice=" + flightPrice +
                '}';
    }
}
