using System;

namespace Ex014
{
    class Program
    {
        static void Main(string[] args)
        {
            double number1, number2;
            Console.WriteLine("-------------------");
            Console.WriteLine("  Cartesian Plan   ");
            Console.WriteLine("-------------------");
            Console.WriteLine("enter two number to plan (X/Y): ");

            string[] numbers = Console.ReadLine().Split(' ');
            number1 = double.Parse(numbers[0]);
            number2 = double.Parse(numbers[1]);

            if (number1 == 0 && number2 == 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("      ORIGIN       ");
                Console.WriteLine("-------------------");
            }
            else if (number1 > 0 && number2 > 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("         Q1        ");
                Console.WriteLine("-------------------");
            }
            else if (number1 < 0 && number2 > 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("         Q2        ");
                Console.WriteLine("-------------------");
            }
            else if (number1 < 0 && number2 < 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("         Q3        ");
                Console.WriteLine("-------------------");
            }
            else if (number1 > 0 && number2 < 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("         Q4        ");
                Console.WriteLine("-------------------");
            }
        }
    }
}