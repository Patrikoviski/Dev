using System;

namespace Ex010
{
    class Program
    {
        static void Main(string[] args)
        {
            int number1, number2;
            Console.WriteLine("-------------------");
            Console.WriteLine("  MULTIPLE NUMBERS ");
            Console.WriteLine("-------------------");
            Console.WriteLine("Type 2 Integer Numbers: ");

            string[] integer = Console.ReadLine().Split();
            number1 = int.Parse(integer[0]);
            number2 = int.Parse(integer[1]);

            if (number1 % number2 == 0 || number2 % number1 == 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("   Are Multiple    ");
                Console.WriteLine("-------------------");
            }
            else
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("The're not multiple");
                Console.WriteLine("-------------------");
            }
        }
    }
}