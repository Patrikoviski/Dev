using System;

namespace Ex016
{
    class Program
    {
        static void Main(string[] args)
        {
            int number1, number2;
            Console.WriteLine("------------------");
            Console.WriteLine("  Cartesian Plan  ");
            Console.WriteLine("------------------");
            Console.Write("Type 2 numbers to plan: ");

            string[] valors = Console.ReadLine().Split();
            number1 = int.Parse(valors[0]);
            number2 = int.Parse(valors[1]);

           while (number1 != 0 && number2 != 0)
            {
                if (number1 > 0 && number2 > 0)
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("      FIRST       ");
                    Console.WriteLine("------------------");
                }
                else if (number1 < 0 && number2 > 0)
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("      SECOND      ");
                    Console.WriteLine("------------------");
                }
                else if (number1 < 0 && number2 < 0)
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("      THIRD       ");
                    Console.WriteLine("------------------");
                }
                else
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("      FOURTH      ");
                    Console.WriteLine("------------------");
                }
                string[] valors2 = Console.ReadLine().Split();
                number1 = int.Parse(valors2[0]);
                number2 = int.Parse(valors2[1]);
            }

            Console.WriteLine("------------------");
            Console.WriteLine("   NULL NUMBER    ");
            Console.WriteLine("------------------");

        }
    }
}