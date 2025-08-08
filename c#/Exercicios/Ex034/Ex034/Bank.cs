using System.Globalization;

namespace Ex034
{
class Bank
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public double Amount { get; private set; }

        public Bank(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public Bank(int id , string name, double amount) : this(id, name)
        {
            Amount = amount;
        }

        public void IncreaseAmount(double some)
        {
            Amount += some;
        }

        public void DecreaseAmount(double some)
        {
            Amount -= some + 5.00;
        }

        public override string ToString()
        {
            return "Account: "
                + Id
                + ", Holder: "
                + Name
                + "Amount: $ "
                + Amount.ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
