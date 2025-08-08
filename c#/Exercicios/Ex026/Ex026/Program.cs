using System;
using System.Globalization;

namespace Ex026
{
    class Program
    {
        static void Main(string[] args)
        {
            Dados a, b;
            double media;
            a = new Dados();
            b = new Dados();

            Console.WriteLine("Dados do primeiro funcionário:");
            Console.Write("Nome: ");
            a.nome = Console.ReadLine();
            Console.Write("Salário: $");
            a.salario = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("Dados do segundo funcionário:");
            Console.Write("Nome: ");
            b.nome = Console.ReadLine();
            Console.Write("Salário: $");
            b.salario = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            media = (a.salario + b.salario) / 2.0;
            Console.WriteLine("Salário médio: $" + media.ToString("F2", CultureInfo.InvariantCulture));
        }
    }
}