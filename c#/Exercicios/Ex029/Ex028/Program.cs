using System;
using System.Globalization;

namespace Ex029
{
    class Program
    {
        static void Main(string[] args)
        {
            double diferenca;
            Aluno NotaFinal = new Aluno();
            Console.Write("Nome do aluno: ");
            NotaFinal.nome = Console.ReadLine();

            Console.WriteLine("Digite as três notas do aluno: ");
            NotaFinal.notaA = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            NotaFinal.notaB = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            NotaFinal.notaC = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine($"NOTA FINAL: {NotaFinal}");

            if (NotaFinal.total >= 60)
            {
                Console.WriteLine("APROVADO");
            }
            else
            {
                Console.WriteLine("REPROVADO");
                diferenca = 60 - NotaFinal.total;
                Console.WriteLine("FALTARAM " + diferenca.ToString("F2",CultureInfo.InvariantCulture) + " PONTOS.");
            }
        }
    }
}