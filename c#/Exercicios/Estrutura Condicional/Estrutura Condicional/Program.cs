using System;

namespace EstruturaCondicional
{
    class Program
    {
        static void Main(string[] args)
        {
            int x, number;
            Console.WriteLine("---------------------");
            Console.WriteLine("Estrutura Condicional");
            Console.WriteLine("---------------------");
            Console.WriteLine("       SIMPLES       ");
            Console.WriteLine("---------------------");

            x = 10;

            Console.WriteLine("       Morning       ");
            Console.WriteLine("---------------------");

            if (x < 5)
            {
                Console.WriteLine("    Good Afternoon   ");
                Console.WriteLine("---------------------");
            }

            Console.WriteLine("     Good Evening    ");
            Console.WriteLine("---------------------");

            Console.WriteLine("      COMPOSTA       ");
            Console.WriteLine("---------------------");

            Console.WriteLine("Type a integer Number: ");
            number =  int.Parse(Console.ReadLine());
           
            if (number % 2 == 0)
            {
                Console.WriteLine("---------------------");
                Console.WriteLine($"{number} is a pair number!");
                Console.WriteLine("---------------------");
            }
            else
            {
                Console.WriteLine("---------------------");
                Console.WriteLine($"{number} is a odd number!");
                Console.WriteLine("---------------------");
            }
        }
    }
}