using System;
using System.Globalization;

namespace Repeat
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            double raizQ;
            Console.WriteLine("----------------------");
            Console.WriteLine("Estrutura de Repetição");
            Console.WriteLine("----------------------");
            Console.WriteLine("Digite um número inteiro positivo: ");
            number = int.Parse(Console.ReadLine());

            while (number > 0)
            {
                raizQ = Math.Sqrt(number);
                Console.WriteLine("----------------------");
                Console.WriteLine("A raiz quadrada de " + number + " é: " + raizQ.ToString("F3", CultureInfo.InvariantCulture));
                Console.WriteLine("Digite outro número inteiro: ");
                number = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("----------------------");
            Console.WriteLine("Número Negativo, programa encerrado!");
            Console.WriteLine("----------------------");
        }
    }
}