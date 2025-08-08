using System;
using System.Globalization;

namespace Beginner004
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("The pH value (between 1.0 and 14.0): ");
            double ph = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            if (ph < 7)
            {
                Console.WriteLine("ph = Acid");
            }
            else if (ph > 7)
            {
                Console.WriteLine("ph = Basic");
            }
            else
            {
                Console.WriteLine("ph = Neutral");
            }
        }
    }
}