using ContaBancária2;
using System;
using System.Globalization;
using System.Security.Cryptography.X509Certificates;

namespace ContaBancaria2
{
    class Program
    {
        static void Main(string[] args)
        {
            BankAccount Account;

            Console.Write("Enter the number account: ");
            int number = int.Parse(Console.ReadLine());

            Console.Write("Enter the account holder: ");
            string name = Console.ReadLine();

            Console.Write("Will there be an initial deposit? (y/n)? ");
            char answer = char.Parse(Console.ReadLine());

            if (answer == 'y' || answer == 'Y')
            {
                Console.Write("Enter the value to initial deposit: ");
                double initialDeposit = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                Account = new BankAccount(number, name, initialDeposit);
            }
            else
            {
                Account = new BankAccount(number, name);
            }

            Console.WriteLine();
            Console.WriteLine("Account details: ");
            Console.WriteLine(Account);

            Console.WriteLine();
            Console.Write("Enter a value to deposit: ");
            double deposit = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Account.AddBalance(deposit);

            Console.WriteLine("Account details updated: ");
            Console.WriteLine(Account);

            Console.WriteLine();
            Console.Write("Enter a value to withdraw: ");
            double withdraw = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Account.RemoveBalance(withdraw);

            Console.WriteLine("Account details updated: ");
            Console.WriteLine(Account);
        }
    }
}