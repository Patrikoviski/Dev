using System;

namespace Ex019
{
    class Program
    {
        static void Main(string[] args)
        {
            int x, numbers;
            int totalIn = 0;
            int totalOut = 0;

            Console.WriteLine("----------------------------");
            Console.Write("How many integers will you type? ");
            x = int.Parse(Console.ReadLine());

            for (int i = 1; i <= x; i++)
            {
                Console.Write($"Enter with the º{i} number: ");
                numbers = int.Parse(Console.ReadLine());

                if (numbers >= 10 && numbers <= 20)
                {
                    totalIn += 1;
                }
                else
                {
                    totalOut += 1;
                }

            }

            Console.WriteLine("----------------------------");
            Console.WriteLine($"{totalIn} in");
            Console.WriteLine($"{totalOut} out");
            Console.WriteLine("----------------------------");
        }
    }
}