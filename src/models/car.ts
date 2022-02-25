export interface Car {
    make: string;
    model: string;
    year: number;
    color?: string;
    price?: number;
    isElectric?: boolean;
    used?: boolean;
    vin?: string;
    id?: string;
}
//there is no const since its not an interface