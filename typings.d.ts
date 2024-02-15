interface ICurrent {
    name: string;
    dt: number;
    timestamp: number;
    main: {
        temp: number;
    };
    weather: Array<{ main: string }>;
    wind: {
        speed: string;
    };
}

interface IForecast {
    list: {
        main: {
            temp: number;
        };
        weather: Array<{ main: string, description: string }>;
        wind: {
            speed: string;
        };
        dt_txt: string;
    }[];
}