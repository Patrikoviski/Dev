using System;

namespace Ex018
{
    class Program
    {
        static void Main(string[] args)
        {
            int x;
            Console.WriteLine("---------------------------");
            Console.Write("Enter with a integer number: ");
            x = int.Parse(Console.ReadLine());
            Console.WriteLine("---------------------------");

            for (int i = 1; i <= x; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
            Console.WriteLine("---------------------------");
        }
    }
}