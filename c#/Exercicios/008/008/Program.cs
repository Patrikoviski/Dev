using System;
using System.Globalization;

namespace Ex008
{
    class Program
    {
        static void Main(string[] args)
        {
            double triangulo, circulo, trapezio, quadrado, retangulo;

            Console.WriteLine("--------------------");
            Console.WriteLine("Triângulos");
            Console.WriteLine("--------------------");
            Console.WriteLine("Digite 3 valores um ao lado do outro: ");

            string[] valores = Console.ReadLine().Split();
            double sideA = double.Parse(valores[0], CultureInfo.InvariantCulture);
            double sideB = double.Parse(valores[1], CultureInfo.InvariantCulture);
            double sideC = double.Parse(valores[2], CultureInfo.InvariantCulture);

            triangulo = sideA * sideC / 2.0;
            circulo = 3.14159 * sideC * sideC;
            trapezio = (sideA + sideB) / 2.0 * sideC;
            quadrado = sideB * sideB;
            retangulo = sideA * sideB;

            Console.WriteLine("--------------------");
            Console.WriteLine("Triangulo: " + triangulo.ToString("F3", CultureInfo.InvariantCulture));
            Console.WriteLine("Circulo: " + circulo.ToString("F3", CultureInfo.InvariantCulture));
            Console.WriteLine("Trapezio: " + trapezio.ToString("F3", CultureInfo.InvariantCulture));
            Console.WriteLine("Quadrado: " + quadrado.ToString("F3", CultureInfo.InvariantCulture));
            Console.WriteLine("Retângulo: " + retangulo.ToString("F3", CultureInfo.InvariantCulture));
            Console.WriteLine("--------------------");
        }
    }
}