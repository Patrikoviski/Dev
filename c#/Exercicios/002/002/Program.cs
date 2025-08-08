using System;
using System.Globalization;

namespace Ex002
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----------------------");
            Console.WriteLine("Bem Vindo!");
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite se nome completo: ");

            string nome = Console.ReadLine();

            Console.WriteLine("----------------------");
            Console.WriteLine("Quantos quartos tem na sua casa?");

            int quartos = int.Parse(Console.ReadLine());

            Console.WriteLine("----------------------");
            Console.WriteLine("Digite o preço de um produto ");

            double preco = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("----------------------");
            Console.WriteLine("Digite seu último nome, idade e altura (mesma linha):");

            string[] vet = Console.ReadLine().Split(' ');
            string nome2 = vet[0];
            int idade = int.Parse(vet[1]);
            double altura = double.Parse(vet[2], CultureInfo.InvariantCulture);

            Console.WriteLine("----------------------");
            Console.WriteLine("Nome Completo: " + nome);
            Console.WriteLine("Quartos na casa: " + quartos);
            Console.WriteLine("Preço de um Produto: R$ " + preco.ToString(CultureInfo.InvariantCulture));
            Console.WriteLine("----------------------");
            Console.WriteLine("Último Nome: " + nome2);
            Console.WriteLine("Idade: " + idade);
            Console.WriteLine("Altura: "+ altura.ToString(CultureInfo.InvariantCulture));
            Console.WriteLine("----------------------");
        }
    }
}
/* .ToString(CultureInfo.InvariantCulture */