using System;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] line = Console.ReadLine().Split(' ');
            int lines = int.Parse(line[0]);
            int coluns = int.Parse(line[1]);

            int[,] matriz = new int[lines, coluns];

            for (int i = 0; i < lines; i++)
            {
                string[] values = Console.ReadLine().Split(' ');

                for (int j = 0; j < coluns; j++)
                {
                    matriz[i, j] = int.Parse(values[j]);
                }
            }

            int test = int.Parse(Console.ReadLine());

            for (int i = 0; i < lines; i++)
            {
                for (int j = 0; j < coluns; j++)
                {
                    if (matriz[i,j] == test)
                    {
                        Console.WriteLine($"Position {i}, {j}:");
                    }
                    if (j > 0)
                    {
                        Console.WriteLine($"Left: {matriz[ i, j - 1]}");
                    }
                    if (i > 0)
                    {
                        Console.WriteLine($"Up {matriz[i - 1, j]}");
                    }
                    if (j < coluns - 1)
                    {
                        Console.WriteLine($"Right: {matriz[ i, j + 1]}");
                    }
                    if (i < lines - 1)
                    {
                        Console.WriteLine($"Down: {matriz[i + 1, j]}");
                    }
                }
            }
        }
    }
}