using System;

namespace Ex022
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            int result = 1;

            Console.WriteLine("-----------------------");
            Console.Write("How number do you want factorial? ");
            number = int.Parse(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                result = result * i;
            }
            Console.WriteLine("-----------------------");
            Console.WriteLine($"{number}! = {result}");
            Console.WriteLine("-----------------------");
        }
    }
}