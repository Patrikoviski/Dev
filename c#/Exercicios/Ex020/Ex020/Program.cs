using System;
using System.Globalization;

namespace Ex020
{
    class Program
    {
        static void Main(string[] args)
        {
            int test;
            double Avg, number1, number2, number3;

            Console.WriteLine("----------------------------");
            Console.Write("How many tests do you want? ");
            test = int.Parse(Console.ReadLine());

            for (int i = 1; i <= test; i++)
            {
                Console.WriteLine($"Type the º{i} numbers to avarege: ");
                string[] valors = Console.ReadLine().Split();
                number1 = double.Parse(valors[0], CultureInfo.InvariantCulture);
                number2 = double.Parse(valors[1], CultureInfo.InvariantCulture);
                number3 = double.Parse(valors[2], CultureInfo.InvariantCulture);

                Avg = (number1 * 2.0 + number2 * 3.0 + number3 * 5.0) / 10.0; ;
                Console.WriteLine(Avg.ToString("F1", CultureInfo.InvariantCulture));

                /*for (int a = 1; a <= 3; a++)
                {
                    Console.WriteLine($"Type the º{i} numbers to avarege: ");
                    string[] valors = Console.ReadLine().Split();
                    number1 = double.Parse(valors[0]);
                    number2 = double.Parse(valors[1]);
                    number3 = double.Parse(valors[2]);

                    Avg = number1 + number2 + number3 / 3;
                    Console.WriteLine(Avg.ToString("F1", CultureInfo.InvariantCulture));
                }*/
            }
        }
    }
}