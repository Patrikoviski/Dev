using Ex034;
using System;
using System.Globalization;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            Bank bank;

            Console.Write("Enter with account number: ");
            int id = int.Parse(Console.ReadLine());
            Console.Write("Enter with name of account: ");
            string name = Console.ReadLine();

            Console.Write("Initial deposit? ");
            char resp = char.Parse(Console.ReadLine());

            if (resp == 's' || resp == 'S')
            {
                Console.Write("Type value to initial deposit: ");
                double InitialDeposit = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                bank = new Bank(id, name, InitialDeposit);
            }
            else
            {
                bank = new Bank(id, name);
            }

            Console.WriteLine();
            Console.WriteLine("Account Data:");
            Console.WriteLine(bank);

            Console.WriteLine();
            Console.Write("Type a value to deposit: ");
            double amount = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            bank.IncreaseAmount(amount);

            Console.WriteLine("Account data updated:");
            Console.WriteLine(bank);

            Console.WriteLine();
            Console.Write("Type a value to withdraw: ");
            double decrease = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            bank.DecreaseAmount(decrease);

            Console.WriteLine("Account data updated:");
            Console.WriteLine(bank);
        }
    }
}