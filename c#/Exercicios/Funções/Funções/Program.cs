using System;

namespace Funcoes
{
    class Program
    {
        static void Main(string[] args)
        {
            int n1, n2, n3;
            Console.WriteLine("----------------");
            Console.WriteLine("  Bigger Number ");
            Console.WriteLine("----------------");
            Console.WriteLine("enter three numbers:");
            n1 = int.Parse(Console.ReadLine());
            n2 = int.Parse(Console.ReadLine());
            n3 = int.Parse(Console.ReadLine());

            double result = bigger(n1, n2, n3);

            Console.WriteLine("Bigger = " + result);
        }
        static int bigger(int a, int b, int c)
        {
            int m;
            if (a > b && a > c)
            {
                m = a;
            }
            else if (b > c)
            {
                m = b;
            }
            else
            {
                m = c;
            }
            return m;
        }

    }
}