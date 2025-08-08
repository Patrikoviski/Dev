using System;

namespace Ex023
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            Console.WriteLine("-----------------------");
            Console.Write("Enter with number: ");
            number = int.Parse(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                if (number % i == 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}