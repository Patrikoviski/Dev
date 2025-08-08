using System;

namespace Ex024
{
    class Program
    {
        static void Main(string[] args)
        {
            int number, first, second, third;
            Console.WriteLine("---------------------");
            Console.Write("Enter with the value: ");
            number = int.Parse(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                first = i;
                second = i * i;
                third = i * i * i;

                Console.WriteLine($"{first} {second} {third}");
                
            }
        }
    }
}