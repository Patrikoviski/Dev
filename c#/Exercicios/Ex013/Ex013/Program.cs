using System;
using System.Globalization;

namespace Ex013
{
    class Program
    {
        static void Main(string[] args)
        {
            double number;
            Console.WriteLine("-------------------");
            Console.WriteLine("Type a number between 0 and 100:");

            number = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            if (number >= 0 && number <= 25)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("  Interval [0,25]  ");
                Console.WriteLine("-------------------");
            }
            else if (number > 25 && number <= 50)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("  Interval [25,50]  ");
                Console.WriteLine("-------------------");
            }
            else if (number > 50 && number <= 75)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("  Interval [50,75]  ");
                Console.WriteLine("-------------------");
            }
            else if (number > 75 && number <= 100)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("  Interval [75,100]  ");
                Console.WriteLine("-------------------");
            }
            else if (number < 0 || number > 100)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("   Out of Range    ");
                Console.WriteLine("-------------------");
            }
        }
    }
}