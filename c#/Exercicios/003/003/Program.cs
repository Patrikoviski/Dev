using System;
using System.Globalization;

namespace Ex003
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----------------------");
            Console.WriteLine(" Bem Vindo!");
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite o Primeiro número:");
            int number1 = int.Parse(Console.ReadLine());

            Console.WriteLine("----------------------");
            Console.WriteLine("Digite o segundo número:");
            int number2 = int.Parse(Console.ReadLine());

            int result = number1 + number2;

            Console.WriteLine("----------------------");
            Console.WriteLine($"Resultado:{result}");
            Console.WriteLine("----------------------");
        }
    }
}