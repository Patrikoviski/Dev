using System;
using System.Globalization;

namespace ContaBancaria
{
class Dados
    {
        /* Atributos Privados*/

        private string _titular;
        private int _id;
        private double _balance;

        /* Propriedades Autoimplementadas*/

        /* Construtores*/

        /* Propriedades Customizadas*/
        public string Titular
        {
            get { return _titular; }
            set
            {
                if (value != null && value.Length > 1)
                {
                    _titular = value;
                }
            }
        }

        public int Id
        {
            get { return _id; }
            set
            {
                _id = value;
            }
        }

        public double Balance
        {
            get { return _balance; }
            set
            {
                _balance = value;
            }
        }

        /* Outros métodos de classe*/

        public void AddBalance(double balance)
        {
            _balance += balance;
        }

        public void RemoveBalance(double balance)
        {
            _balance -= balance + 5.00;
        }

        public override string ToString()
        {
            return "Conta "
                + _id
                + ", Titular: "
                + _titular
                + ", Saldo: $ "
                + _balance.ToString("F2", CultureInfo.InvariantCulture);
        }

    }
}