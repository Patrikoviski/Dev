using System;
using System.Globalization;

namespace ContaBancaria
{
    class Program
    {
        static void Main(string[] args)
        {
            string Test;
            Dados dados = new Dados();
            Console.Write("Entre o número da conta: ");
            dados.Id = int.Parse(Console.ReadLine());

            Console.Write("Entre o titular da conta: ");
            dados.Titular = Console.ReadLine();

            Console.Write("Haverá depósito inicial (s/n)? ");
            Test = Console.ReadLine();

            if (Test == "s")
            {
                Console.Write("Entre o valor de depósito inicial: ");
                dados.Balance = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                Console.WriteLine();
                Console.WriteLine("Dados da conta:");
                Console.WriteLine(dados);
            }
            else
            {
                Console.WriteLine();
                Console.WriteLine("Dados da conta:");
                Console.WriteLine(dados);
            }

            Console.WriteLine();
            Console.Write("Entre um valor para depósito: ");
            dados.AddBalance(double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture));
            Console.WriteLine("Dados da conta atualizados:");
            Console.WriteLine(dados);

            Console.WriteLine();
            Console.Write("Entre um valor para saque: ");
            dados.RemoveBalance(double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture));
            Console.WriteLine("Dados da conta atualizados:");
            Console.WriteLine(dados);

        }
    }
}