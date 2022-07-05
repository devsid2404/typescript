let x: string;
let y: number;
let z: boolean;
let a: Date;
let c: string[];
let b: any;

x =  "string";
y = 23;
z = true;
a = new Date("12/02/1990");
c = ['', ''];
c = 'string' as any; // Typecasting as any
b = 23;        // because this is any type can assign number
b = "string"; // or string

