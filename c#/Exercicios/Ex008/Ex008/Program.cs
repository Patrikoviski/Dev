using System;

namespace Ex008
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            Console.WriteLine("-------------------");
            Console.WriteLine("Type a integer Number: ");

            number = int.Parse(Console.ReadLine());

            if (number < 0)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine($"{number} is a odd number!");
                Console.WriteLine("-------------------");
            }
            else
            {
                Console.WriteLine("-------------------");
                Console.WriteLine($"{number} is a pair number!");
                Console.WriteLine("-------------------");
            }
        }
    }
}