using System;

namespace Beginner001
{
    class Program
    {
        static void Main(string[] args)
        {
            // repeticao FOR

            for (int i = 0; i <= 100; i++)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            Console.WriteLine();

            // repeticao While

            int j = 0;
            while (j <= 100)
            {
                j = j + 1;
                Console.Write($"{j} ");
            }
        }
    }
}