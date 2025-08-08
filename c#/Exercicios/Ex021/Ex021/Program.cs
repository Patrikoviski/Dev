using System;
using System.Globalization;

namespace Ex021
{
    class Program
    {
        static void Main(string[] args)
        {
            int time;
            double result, a, b;

            Console.WriteLine("-------------------");
            Console.Write("How many time? ");
            time = int.Parse(Console.ReadLine());

            for (int i = 1; i <= time; i++)
            {
                Console.Write("Enter with the numbers: ");
                string[] values = Console.ReadLine().Split();
                a = double.Parse(values[0]);
                b = double.Parse(values[1]);
                result = a / b;

                if (b == 0)
                {
                    Console.WriteLine("-------------------");
                    Console.WriteLine("Impossible Division");
                    Console.WriteLine("-------------------");
                }
                else
                {
                    Console.WriteLine("-------------------");
                    Console.WriteLine(a + " / " + b + " = " + result.ToString("F1", CultureInfo.InvariantCulture));
                    Console.WriteLine("-------------------");
                }
            }
        }
    }
}