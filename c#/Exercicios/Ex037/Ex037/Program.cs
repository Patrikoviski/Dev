using System;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("size of matriz: ");
            int number = int.Parse(Console.ReadLine());

            int[,] matriz = new int[number, number];

            for (int i = 0; i < number; i++)
            {
                string[] values = Console.ReadLine().Split(' ');
                
                for (int j = 0; j < number; j++)
                {
                    matriz[i,j] = int.Parse(values[j]);
                }
            }
            Console.WriteLine();

            Console.WriteLine("Main diagonal:");
            for (int i = 0; i < number; i++)
            {
                Console.Write(matriz[i,i] + " ");
            }
            Console.WriteLine();

            int count = 0;
            for (int i = 0; i < number; i++)
            {
                for (int j = 0; j < number; j++)
                {
                    if (matriz[i,j] < 0)
                    {
                        count++;
                    }
                }
            }
            Console.WriteLine($"Negative numbers = {count}");
        }
    }
}