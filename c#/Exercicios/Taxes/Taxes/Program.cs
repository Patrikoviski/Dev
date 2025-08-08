using System;
using System.Globalization;
using Taxes.Entities;

namespace Taxes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<People> list = new List<People>();

            Console.Write("Enter the number of tax payers: ");
            int number = int.Parse(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                Console.WriteLine("-----------------------------");
                Console.WriteLine($"Tax payer #{i} data:");
                Console.Write("Individual or Company (i/c)? ");
                char ch = char.Parse(Console.ReadLine());
                Console.Write("Name: ");
                string name = Console.ReadLine();
                Console.Write("Anual income: ");
                double rent = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

                if (ch == 'i')
                {
                    Console.Write("Health expenditures: ");
                    double health = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                    list.Add(new Individual(name, rent, health));
                }
                else if (ch == 'c')
                {
                    Console.Write("Number of employees: ");
                    int employees = int.Parse(Console.ReadLine());
                    list.Add(new Company(name, rent, employees));
                }
            }

            double sum = 0.0;
            Console.WriteLine("-----------------------------");
            Console.WriteLine("TAXES PAID:");
            foreach (People values in list)
            {
                double tax = values.Tax();
                Console.WriteLine($"{values.Name}: $ {values.Tax().ToString("F2", CultureInfo.InvariantCulture)}");
                sum += tax;
            }

            Console.WriteLine("-----------------------------");
            Console.WriteLine($"TOTAL TAXES: $ {sum.ToString("F2", CultureInfo.InvariantCulture)}");
            Console.WriteLine("-----------------------------");
        }
    }
}