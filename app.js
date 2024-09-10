/*Plantilla para el ejercicio de ecuaciones cuadráticas
Autor:
fecha:

ax^2 + bx +c = 0
donde a,b,c son números reales y a!=0
x = -b + - raiz(b^2 - 4ac) / 2a

para hacer exponenciación, se tiene que
z = 3**2 lo que significa 3 elevado a la dos
ó Math.pow(3,3)

para hacer raíces
j = 100**(1/2) que significa raíz cuadrada de 10
ó Math.sqrt(100)

asset:
sea la ecuación cuadrática x^2+10x+24=0
a=1
b=10
c=24 
las respuestas son:
x1=-4
x2=-6
*/
// definiendo las variables...
let a=1;
let b=10;
let c=24;
//valida que a sea diferente de cero! ...

//termina de completar las ecuaciones dentro de los paréntesis

x1=(-b+(b**(2))); //nota que aquí la expresión matemática tiene +

x2=(-b-(b**(2))); //nota que aquí la expresión matemática tiene -


//Muestra los resultados de ambas x ...
console.log("x1 = "+x1);

/*
emplea posteriormente ciclos y funciones para solucionar
varias ecuaciones a la vez!
*/