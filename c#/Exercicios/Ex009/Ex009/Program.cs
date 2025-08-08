using System;

namespace Ex009
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            Console.WriteLine("-------------------");
            Console.WriteLine("   Pair or Odd     ");
            Console.WriteLine("-------------------");
            Console.WriteLine("Type a integer number:");

            number = int.Parse(Console.ReadLine());

            if (number % 2 == 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine($"{number} is a pair number!");
                Console.WriteLine("-------------------");
            }
            else
            {
                Console.WriteLine("-------------------");
                Console.WriteLine($"{number} is a odd number!");
                Console.WriteLine("-------------------");
            }

        }
    }
}