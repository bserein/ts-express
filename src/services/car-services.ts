import { Car } from '../models/car'

interface CarService {
    AddNewCar(car: Car): Car;
    getAllCars(): Car[];
    getCarbyId(carId: string): Car
}

const getAllCars = (): Car[] => {
    const cars: Car[] = [];
    const car1: Car = {make: "Porsche", model: "911", year: 2022, color: "yellow" } // different way of declaring Car
    const car2: Car = {make: "Mercedes", model: "E350"} as Car //different way of declaring Car
    
    cars.push(car1, car2)
    return cars;
}
console.log(...getAllCars())

export const CarService = { getAllCars } as CarService