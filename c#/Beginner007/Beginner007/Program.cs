using System;

namespace Beginner007
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Minutes to analyze a process: ");
            int time = int.Parse(Console.ReadLine());

            int total = 480 / time;
            Console.WriteLine(total);
        }
    }
}