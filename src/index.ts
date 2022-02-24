import express, {Request, Response} from 'express'
import { CarService } from './services/car-services';

const app = express();
app.use(express.json());

app.all('*',(req: Request, res: Response) => {
    const result = CarService.getAllCars()

    res.status(200).json(result)
}) 

const port = 3450;

app.listen(port,() => {
    console.log(`listening to port: ${port}`)
})