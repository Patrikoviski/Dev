using System;
using System.ComponentModel.Design;

namespace EstruturaCondicionalHour
{
    class Program
    {
        static void Main(string[] args)
        {
            int hour;
            Console.WriteLine("---------------------");
            Console.WriteLine("Estrutura Condicional");
            Console.WriteLine("       Horário       ");
            Console.WriteLine("---------------------");

            Console.WriteLine("Que horas são?");
            hour = int.Parse(Console.ReadLine());

            if (hour >= 6 && hour < 12)
                    {
                Console.WriteLine("---------------------");
                Console.WriteLine("      BOM DIA!       ");
                Console.WriteLine("---------------------");
            }
            else if (hour >= 12 && hour < 18)
                    {
                Console.WriteLine("---------------------");
                Console.WriteLine("      BOA TARDE!     ");
                Console.WriteLine("---------------------");
            }
            else if (hour >= 18 && hour <= 23)
            {
                Console.WriteLine("---------------------");
                Console.WriteLine("      BOA NOITE      ");
                Console.WriteLine("---------------------");
            }
            else if (hour >= 0 && hour < 6)
            {
                Console.WriteLine("---------------------");
                Console.WriteLine("      BOA NOITE      ");
                Console.WriteLine("---------------------");
            }
            else 
            {
                Console.WriteLine("---------------------");
                Console.WriteLine("   Hora inválida!    ");
                Console.WriteLine("---------------------");
            }
        }
    }
}