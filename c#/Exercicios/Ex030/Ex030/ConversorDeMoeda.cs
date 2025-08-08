namespace Ex030
{
class ConversorDeMoeda
    {
        public static double cotacao(double dolar, double comprar)
        {
            double total = dolar * comprar;
            return total + total * 0.06;
        }
    }
}
