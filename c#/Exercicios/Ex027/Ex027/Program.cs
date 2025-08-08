using System;
using System.Globalization;

namespace Ex027
{
    class Program
    {
        static void Main(string[] args)
        {
            Retangulo dados = new Retangulo();
            Console.WriteLine("Entre a largura e altura do retângulo:");
            dados.Largura = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            dados.Altura = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("AREA = " + dados.Area().ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("PERÍMETRO = " + dados.Perimetro().ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("DIAGONAL = " + dados.Diagonal().ToString("F2", CultureInfo.InvariantCulture));
        }
    }
}