using System;

namespace Ex017
{
    class Program
    {
        static void Main(string[] args)
        {
            int Alcool = 0;
            int gas = 0;
            int diesel = 0;
            int some;

            Console.WriteLine("------------------");
            Console.WriteLine("   GAS STATION    ");
            Console.WriteLine("------------------");
            Console.WriteLine("[1] Alcool");
            Console.WriteLine("[2] Gasoline");
            Console.WriteLine("[3] Diesel");
            Console.WriteLine("[4] Exit");
            Console.Write("enter here: ");
            some = int.Parse(Console.ReadLine());

            while (some != 4)
            {
                if (some == 1)
                {
                    Alcool += 1;
                }
                else if (some == 2)
                {
                    gas += 1;
                }
                else if (some == 3)
                {
                    diesel += 1;
                }
                else
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("Wrong Valor");
                }
                Console.WriteLine("------------------");
                Console.WriteLine("[1] Alcool");
                Console.WriteLine("[2] Gasoline");
                Console.WriteLine("[3] Diesel");
                Console.WriteLine("[4] Exit");
                Console.Write("enter here: ");
                some = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("------------------");
            Console.WriteLine("THANK YOU!     ");
            Console.WriteLine($"Alcool: {Alcool}");
            Console.WriteLine($"Gasoline: {gas}");
            Console.WriteLine($"Diesel: {diesel}");
            Console.WriteLine("------------------");
        }
    }
}