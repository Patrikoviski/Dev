using System;
using System.Globalization;

namespace Ex029
{
    class Aluno
    {
        public string nome;
        public double notaA, notaB, notaC, total;

        public double Media()
        {
            total = notaA + notaB + notaC;
            return total;
        }

        public override string ToString()
        {
            return Media().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}