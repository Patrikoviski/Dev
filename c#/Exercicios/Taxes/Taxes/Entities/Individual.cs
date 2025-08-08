namespace Taxes.Entities
{
    class Individual : People
    {
        public double Health { get; set; }

        public Individual()
        {
        }

        public Individual(string name, double rent, double health)
            : base(name, rent)
        {
            Health = health;
        }

        public override double Tax()
        {
            if (Rent < 20000.0)
            {
                return Rent * 0.15 - Health * 0.5;
            }
            else
            {
                return Rent * 0.25 - Health * 0.5;
            }
        }
    }
}