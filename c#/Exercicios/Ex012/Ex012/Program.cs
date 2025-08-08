using System;
using System.Globalization;

namespace Ex009
{
    class Program
    {
        static void Main(string[] args)
        {
            int choice1, choice2;
            double preco, total = 0.0;
            
            Console.WriteLine("-------------------");
            Console.WriteLine("  EMICI DONAITIS   ");
            Console.WriteLine("-------------------");
            Console.WriteLine("make your choice: ");

            string[] choice = Console.ReadLine().Split();
            choice1 = int.Parse(choice[0]);
            choice2 = int.Parse(choice[1]);

            if (choice1 == 1)
            {
                preco = 4.00;
                total = preco * choice2;
                Console.WriteLine("-------------------");
                Console.WriteLine("Total: " + total.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("-------------------");
            }
            else if (choice1 == 2)
            {
                preco = 4.50;
                total = preco * choice2;
                Console.WriteLine("-------------------");
                Console.WriteLine("Total: " + total.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("-------------------");
            }
            else if(choice1 == 3)
            {
                preco = 5.00;
                total = preco * choice2;
                Console.WriteLine("-------------------");
                Console.WriteLine("Total: " + total.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("-------------------");
            }
            else if (choice1 == 4)
            {
                preco = 2.00;
                total = preco * choice2;
                Console.WriteLine("-------------------");
                Console.WriteLine("Total: " + total.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("-------------------");
            }
            else if (choice1 == 5)
            {
                preco = 1.50;
                total = preco * choice2;
                Console.WriteLine("-------------------");
                Console.WriteLine("Total: " + total.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("-------------------");
            }
        }
    }
}