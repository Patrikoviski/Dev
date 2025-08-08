using System;
using System.Globalization;

namespace ContaBancária2
{
class BankAccount
    {
        public int Id { get; private set; }
        public string Holder { get; set; }
        public double Balance { get; private set; }

        public BankAccount(int id, string holder)
        {
            Id = id;
            Holder = holder;
        }

        public BankAccount(int id, string holder, double initialDeposit) : this(id, holder)
        {
            AddBalance(initialDeposit);
        }

        public void AddBalance(double balance)
        {
            Balance += balance;
        }

        public void RemoveBalance(double balance)
        {
            Balance -= balance + 5.0;
        }

        public override string ToString()
        {
            return "Account: "
            + Id
            + ", Holder: "
            + Holder
            + ", Balance: $ "
            + Balance.ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}