using Ex032;
using System;
using System.Globalization;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee();

            Console.Write("Name: ");
            employee.Name = Console.ReadLine();
            Console.Write("Raw Salary: ");
            employee.RawSalary = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.Write("Tax: ");
            employee.Tax = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine();
            Console.WriteLine("Employee: " + employee);

            Console.WriteLine();
            Console.Write("Percentage to increase salary: ");
            double percent = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            employee.IncreaseSalary(percent);

            Console.WriteLine();
            Console.WriteLine($"Data Updated: {employee}");
        }
    }
}