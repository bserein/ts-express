import { connectDB } from "../connectDB";
import { Car } from "../models/car";
import { CollectionReference } from 'firebase-admin/firestore'

interface CarService {
  addNewCar(car: Car): Promise<Car>; 
  getAllCars(): Promise<Car[] | null>; 
  getCarbyId(carId: string): Car;
}

const carCollection = connectDB().collection("car") as CollectionReference<Car>; 

const getAllCars = async (): Promise<Car[] | null> => {
  // const cars: Car[] = [];
  // const car1: Car = {make: "Porsche", model: "911", year: 2022, color: "yellow" } // different way of declaring Car
  // const car2: Car = {make: "Mercedes", model: "E350"} as Car //different way of declaring Car

  // cars.push(car1, car2)
  try {
    const result = await carCollection.get();
    const cars = result.docs.map((doc) => {
        const car: Car = doc.data()
        car.id = doc.id;
      return car;
    });
    return cars;
  } catch (error){
      //const res: Car[] = []
    return null
  }
  
};

const addNewCar = async (car: Car): Promise<Car> => {
    const result = await carCollection.add(car)

    car.id = result.id

    return car;
}

export const carService = { getAllCars, addNewCar } as CarService;
