using System;
using System.Globalization;

namespace Course011
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("-------------------------------");
            Console.WriteLine("    peradores Comparativos     ");
            Console.WriteLine("-------------------------------");
            Console.WriteLine("          Menor e Maior        ");
            Console.WriteLine("-------------------------------");

            int a = 10;
            bool c1, c2, c3, c4, c5, c6, c7, c8;

            c1 = a < 10;
            c2 = a < 20;
            c3 = a > 10;
            c4 = a > 5;
            c5 = a <= 10;
            c6 = a >= 10;
            c7 = a == 10;
            c8 = a != 10;

            Console.WriteLine($"{a} é menor do que 10: {c1}");
            Console.WriteLine($"{a} é menor do que 20: {c2}");
            Console.WriteLine($"{a} é maior do que 10: {c3}");
            Console.WriteLine($"{a} é maior do que 5: {c4}");
            Console.WriteLine("-------------------------------");
            Console.WriteLine("Maior ou igual e Menor ou igual");
            Console.WriteLine("-------------------------------");

            Console.WriteLine($"{a} é menor ou igual a 10: {c5}");
            Console.WriteLine($"{a} é maior ou igual a 10: {c6}");

            Console.WriteLine("-------------------------------");
            Console.WriteLine("             Igual             ");
            Console.WriteLine("-------------------------------");

            Console.WriteLine($"{a} é igual a 10: {c7}");

            Console.WriteLine("-------------------------------");
            Console.WriteLine("           Diferente           ");
            Console.WriteLine("-------------------------------");

            Console.WriteLine($"{a} é diferente de 10: {c8}");
            Console.WriteLine("-------------------------------");

        }
    }
}