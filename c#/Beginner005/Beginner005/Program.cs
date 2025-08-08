using System;
using System.Globalization;

namespace Beginner005
{
    class Program
    {
        static void Main(string[] args)
        {
            List<double> list = new List<double>();

            double ph = 0;
            while (ph != -1)
            {
                Console.WriteLine("--------------------------------------");
                Console.WriteLine("The pH value (between 1.0 and 14.0): ");
                ph = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

                if (ph < 7)
                {
                    Console.WriteLine("pH = Acid");
                }
                else if (ph > 7)
                {
                    Console.WriteLine("pH = Basic");
                }
                else
                {
                    Console.WriteLine("pH = Neutral");
                }
            }          
        }
    }
}