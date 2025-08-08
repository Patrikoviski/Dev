using Ex035;
using System;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            Rooms[] vect = new Rooms[10];

            Console.Write("How many rooms will be rented? ");
            int amount = int.Parse(Console.ReadLine());


            for (int i = 1; i <= amount; i++)
            {
                Console.WriteLine();
                Console.WriteLine($"Rent {i}");
                Console.Write("Name: ");
                string name = Console.ReadLine();

                Console.Write("Email: ");
                string email = Console.ReadLine();

                Console.Write("Room: ");
                int room = int.Parse(Console.ReadLine());

                vect[room] = new Rooms(name, email);
            }

            Console.WriteLine();
            Console.WriteLine("Busy rooms: ");
            for (int i = 0; i < 10; i++)
            {
                if (vect[i] != null)
                {
                    Console.WriteLine(i + ": " + vect[i] );
                }
            }
        }
    }
}