using System;

namespace Beginner006
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Type a integer number: ");
            int number = int.Parse(Console.ReadLine());
            int unit = 0;
            if (number < 99 || number > -99)
            {
                unit = number % 10;
            }
            else if (number < 999 || number > -999)
            {
                unit = number % 100;
            }
            else if (number < 9999 || number > -9999)
            {
                unit = number % 1000;
            }
            Console.WriteLine();
            Console.WriteLine(unit);
        }
    }
}