using System;

namespace Beginner002
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Type a integer number:");
            int number1 = int.Parse(Console.ReadLine());

            List<int> list = new List<int>();

            for (int i = 1; i <= 20; i++)
            {
                Console.Write($"Type the #{i} number: ");
                list.Add(int.Parse(Console.ReadLine()));
            }

            int j = 0;
            foreach (int i in list)
            {
                if (i == number1)
                {
                    j++;
                }
            }
            Console.WriteLine();
            Console.WriteLine($"{number1} appear {j} times");
        }
    }
}