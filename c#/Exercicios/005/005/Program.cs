using System;
using System.Globalization;

namespace Ex005
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite 4 números: ");

            int number1 = int.Parse(Console.ReadLine());
            int number2 = int.Parse(Console.ReadLine());
            int number3 = int.Parse(Console.ReadLine());
            int number4 = int.Parse(Console.ReadLine());

            int dif = (number1 * number2 - number3 * number4);

            Console.WriteLine("----------------------");
            Console.WriteLine($"Diferença: {dif}");
            Console.WriteLine("----------------------");
        }
    }
}