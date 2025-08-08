using System;
using System.Globalization;

namespace Course018
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime d1 = DateTime.Now;
            DateTime d2 = new DateTime(2018, 11, 25);
            DateTime d3 = new DateTime(2018, 11, 25, 20, 45, 0);

            DateTime d4 = DateTime.UtcNow;

            DateTime d5 = DateTime.Parse("2000-08-15");
            DateTime d6 = DateTime.Parse("2000-08-15 13:05:58");

            DateTime d7 = DateTime.Parse("15/08/2000");
            DateTime d8 = DateTime.Parse("15/08/2000 13:05:58");

            DateTime d9 = DateTime.ParseExact("08-15-00", "MM-dd-yy", CultureInfo.InvariantCulture);
            DateTime d10 = DateTime.ParseExact("15/08/2000 13:05:58", "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture);

            Console.WriteLine(d1);
            Console.WriteLine(d1.Ticks);
            Console.WriteLine("------------------------");
            Console.WriteLine(d2);
            Console.WriteLine("------------------------");
            Console.WriteLine(d3);
            Console.WriteLine("------------------------");
            Console.WriteLine(d4);
            Console.WriteLine("------------------------");
            Console.WriteLine(d5);
            Console.WriteLine("------------------------");
            Console.WriteLine(d6);
            Console.WriteLine("------------------------");
            Console.WriteLine(d7);
            Console.WriteLine("------------------------");
            Console.WriteLine(d8);
            Console.WriteLine("------------------------");
            Console.WriteLine("Data Personalizada");
            Console.WriteLine(d9);
            Console.WriteLine("------------------------");
            Console.WriteLine(d10);
        }
    }
}