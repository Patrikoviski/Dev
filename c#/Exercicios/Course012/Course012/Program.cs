using System;
using System.Globalization;

namespace Course012
{
    class Program
    {
        static void Main(string[] args)
        {
            Product p = new Product("TV", 500.00, 10);
            Console.WriteLine(p.Name);

            p.Name = (Console.ReadLine());
            p.Quantity = int.Parse(Console.ReadLine());

            Console.WriteLine("-------------------------");
            Console.WriteLine(p.Name);
            Console.WriteLine(p.Price);
            Console.WriteLine(p.Quantity);
        }
    }
}