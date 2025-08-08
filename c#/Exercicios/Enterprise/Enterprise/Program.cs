using System;
using System.Globalization;
using Enterprise.Entities;
using Enterprise.Entities.Enums;

namespace Enterprise
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter department's name: ");
            var deptName = Console.ReadLine();

            Console.WriteLine("Enter worker data: ");
            Console.Write("Name:");
            var name = Console.ReadLine();

            Console.Write("Level (Junior/MidLevel/Senior): ");
            WorkerLevel level = Enum.Parse<WorkerLevel>(Console.ReadLine());

            Console.Write("Base salary: ");
            var baseSalary = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);


            Department dept = new Department(deptName);
            Worker worker = new Worker(name, level, baseSalary, dept);

            Console.Write("How many contracts to this worker? ");
            var Contracts = int.Parse(Console.ReadLine());

            for (int i = 1; i <= Contracts; i++)
            {
                Console.WriteLine("------------------------------------");
                Console.WriteLine($"Enter #{i} contract data:");
                Console.Write("Date (DD/MM/YYYY): ");
                DateTime date = DateTime.Parse(Console.ReadLine());

                Console.Write("Value per hour: ");
                var valuePerHour = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

                Console.Write("Duration (hours): ");
                var hours = int.Parse(Console.ReadLine());

                HourContract contract = new HourContract(date, valuePerHour, hours);
                worker.AddContract(contract);
            }

            Console.Write("Enter month and year to calculate income (MM/YYYY): ");
            string monthAndYear = Console.ReadLine();
            var month = int.Parse(monthAndYear.Substring(0, 2));
            var year = int.Parse(monthAndYear.Substring(3));

            Console.WriteLine($"Name: {worker.Name}");
            Console.WriteLine($"Department: {worker.Department.Name}");
            Console.WriteLine($"Income for {monthAndYear}: {worker.Income(year, month).ToString("F2", CultureInfo.InvariantCulture)}");

            worker.Income(year, month);
        }
    }
}