using System;
using System.Globalization;

namespace raio
{
    class Program
    {
        static void Main(string[] args)
        {
            double pi = 3.14159;
            Console.WriteLine("----------------------");
            Console.WriteLine("Bem Vindo!");
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite o raio de um circulo");
            double raio = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double area = pi * Math.Pow(raio, 2);

            Console.WriteLine("----------------------");
            Console.WriteLine("Area = " + area.ToString("F4", CultureInfo.InvariantCulture));
            Console.WriteLine("----------------------");
        }
    }
}