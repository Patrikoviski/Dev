using System;

namespace Ex015
{
    class Program
    {
        static void Main(string[] args)
        {
            string password;
            Console.WriteLine("------------------");
            Console.WriteLine("    PASSWORD      ");
            Console.WriteLine("------------------");
            Console.Write("Type your password: ");
            password = Console.ReadLine();

            while (password != "2002")
            {
                Console.WriteLine("------------------");
                Console.WriteLine("Incorred Password ");
                Console.Write("Try Again: ");
                password = Console.ReadLine();
            }
            Console.WriteLine("------------------");
            Console.WriteLine("  Granted Access!  ");
            Console.WriteLine("------------------");
        }
    }
}