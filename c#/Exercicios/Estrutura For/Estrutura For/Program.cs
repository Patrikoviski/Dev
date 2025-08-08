using System;

namespace EstruturaFor
{
    class Program
    {
        static void Main(string[] args)
        {
            int repeat, numbers, start;
            int some = 0;

            Console.WriteLine("-------------------------------");
            Console.WriteLine("         Estrutura For         ");
            Console.WriteLine("-------------------------------");
            Console.Write("How many integers will you type? ");
            repeat = int.Parse(Console.ReadLine());

            for (start = 1; start <= repeat; start++)
            {
                Console.Write($"Type the {start}º number: ");
                numbers = int.Parse(Console.ReadLine());
                /*start += 1;*/
                some += numbers;
            }
            Console.WriteLine($"Some: {some}");
            Console.WriteLine("-------------------------------");
        }
    }
}