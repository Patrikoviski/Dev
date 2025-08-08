using System;
using System.Globalization;

namespace Ex005
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----------------------");
            Console.WriteLine("Número do fúncionario: ");

            int number = int.Parse(Console.ReadLine());

            Console.WriteLine("----------------------");
            Console.WriteLine("Carga Horária: ");

            int time = int.Parse(Console.ReadLine());

            Console.WriteLine("----------------------");
            Console.WriteLine("Salário por hora: ");

            double salary = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            double total = time * salary;

            Console.WriteLine("----------------------");
            Console.WriteLine($"Number: {number}");
            Console.WriteLine("Salary: $ " + total.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("----------------------");
        }
    }
}