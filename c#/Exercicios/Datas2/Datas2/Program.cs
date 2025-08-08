using System;
using System.Data;

namespace Dates2
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime d = DateTime.Now;
            DateTime d2 = d.AddDays(7);

            Console.WriteLine("------------------------");
            Console.Write("Gerado: ");
            Console.WriteLine(d);
            Console.Write("Vencimento: ");
            Console.WriteLine(d2);
            Console.WriteLine("------------------------");
        }
    }
}