using System;

namespace Ex011
{
    class Program
    {
        static void Main(string[] args)
        {
            int hour1, hour2, total;
            Console.WriteLine("-------------------");
            Console.WriteLine("     Game Time     ");
            Console.WriteLine("-------------------");
            Console.WriteLine("enter the start and end time of the game:");

            string[] hour = Console.ReadLine().Split();
            hour1 = int.Parse(hour[0]);
            hour2 = int.Parse(hour[1]);
            

            if (hour1 == hour2)
            {
                Console.WriteLine("-------------------");
                Console.WriteLine("The game lasted 24 Hours");
                Console.WriteLine("-------------------");
            }
            else if (hour1 < hour2)
            {
                total = hour2 - hour1;
                Console.WriteLine("-------------------");
                Console.WriteLine($"The game lasted {total} hour(s)");
                Console.WriteLine("-------------------");
            }
            else
            {
                total = 24 - hour1 + hour2;
                Console.WriteLine("-------------------");
                Console.WriteLine($"The game lasted {total} hour(s)");
                Console.WriteLine("-------------------");
            }
        }
    }
}