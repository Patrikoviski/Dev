using System;

namespace OperadoresLogicos
{
    class Program
    {
        static void Main(string[] args)
        {
            bool c1, c2, c3;

            Console.WriteLine("--------------------------");
            Console.WriteLine("    Operadores Lógicos    ");
            Console.WriteLine("--------------------------");
            Console.WriteLine("         && (E)           ");
            Console.WriteLine("--------------------------");

            c1 = 2 > 3 && 4 != 5;
            c2 = 2 > 3 || 4 != 5;
            c3 = !(2 > 3) && 4 != 5;


            Console.WriteLine($"Falso e Verdadeiro = {c1}");

            Console.WriteLine("--------------------------");
            Console.WriteLine("         || (ou)          ");
            Console.WriteLine("--------------------------");

            Console.WriteLine($"Falso ou Verdadeiro = {c2}");

            Console.WriteLine("--------------------------");
            Console.WriteLine("         ! (não)          ");
            Console.WriteLine("--------------------------");

            Console.WriteLine($"Falso e Verdadeiro = {c3}");
            Console.WriteLine("--------------------------");

        }
    }
}