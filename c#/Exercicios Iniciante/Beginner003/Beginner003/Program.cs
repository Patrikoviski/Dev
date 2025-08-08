using System;
using System.Globalization;

namespace Beginner003
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Note 1: ");
            double note1 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.Write("Note 2: ");
            double note2 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.Write("Note 3: ");
            double note3 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double average = (note1 + note2 + note3) / 3;
            double weightedAverage = (2 * note1 + 2 * note2 + 3 * note3) / (2 + 2 + 3);
            double weightedAverage2 = (1 * note1 + 2 * note2 + 2 * note3) / (1 + 2 + 2);

            Console.WriteLine();
            Console.WriteLine($"Avarage: {average.ToString("F2", CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Weighted Avarage (2, 2, 3): {weightedAverage.ToString("F2", CultureInfo.InvariantCulture)}");
            Console.WriteLine($"Weighted Avarage (1, 2, 2): {weightedAverage2.ToString("F2", CultureInfo.InvariantCulture)}");
        }
    }
}