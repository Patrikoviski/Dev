using Bank.Entities.Exceptions;

namespace Bank.Entities
{
    class Account
    {
        public int Number { get; set; }
        public string Holder { get; set; }
        public double Balance { get; set; }
        public double WithdrawLimit { get; set; }

        public Account()
        {
        }

        public Account(int number, string holder, double balance, double withdrawLimit)
        {
            Number = number;
            Holder = holder;
            Balance = balance;
            WithdrawLimit = withdrawLimit;
        }

        public void Deposit(double amount)
        {
            Balance += amount;
        }

        public void Withdraw(double amount)
        {
            
            if (amount > Balance)
            {
                throw new DomainException("Not enough balance");
            }
            else if (amount > WithdrawLimit)
            {
                throw new DomainException("The amount exceeds withdraw limit");
            }
            /*else if (amount > Balance || amount > WithdrawLimit)
            {
                throw new DomainException("Not enough balance and The amount exceeds withdraw limit");
            } 
            nao funciona */

            Balance -= amount;
        }
    }
}