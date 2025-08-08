using System;
using System.Globalization;

namespace Ex007
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite na mesma linha (código da peça, número de peças, valor unitário de cada peça)");
            string[] vet = Console.ReadLine().Split(' ');
            int cod1 = int.Parse(vet[0]);
            int number1 = int.Parse(vet[1]);
            double valor1 = double.Parse(vet[2], CultureInfo.InvariantCulture);

            Console.WriteLine("----------------------");
            Console.WriteLine("Digite na mesma linha (código da peça, número de peças, valor unitário de cada peça)");
            string[] vet2 = Console.ReadLine().Split(' ');
            int cod2 = int.Parse(vet2[0]);
            int number2 = int.Parse(vet2[1]);
            double valor2 = double.Parse(vet2[2], CultureInfo.InvariantCulture);

            double Resultado = valor1 * number1 + valor2 * number2;

            Console.WriteLine("----------------------");
            Console.WriteLine("Valor a Pagar: $ " + Resultado.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("----------------------");
        }
    }
}