using Enum.Entities;
using Enum.Entities.Enums;
using System;

namespace Course022
{
    class Program
    {
        static void Main(string[] args)
        {
            // Criando um pedido com status 'PendingPayment'
            Order order = new Order()
            {
                Id = 1080,
                Moment = DateTime.Now,
                Status = OrderStatus.PendingPayment,
            };

            Console.WriteLine(order);  // Exibindo o pedido

            // Convertendo o status da enumeração para string
            string txt = OrderStatus.PendingPayment.ToString();

            // Usando Enum.TryParse para tentar fazer o parse de "Delivered"
            OrderStatus os;
            bool success = Enum.TryParse("Delivered", out os);

            if (success)
            {
                Console.WriteLine(os);  // Exibindo o status convertido
            }
            else
            {
                Console.WriteLine("Erro: Valor inválido para a enumeração.");
            }

            // Exibindo o valor da variável 'txt' (que é "PendingPayment")
            Console.WriteLine(txt);
        }
    }
}