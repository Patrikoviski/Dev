namespace Taxes.Entities
{
     abstract class People
    {
        public string Name { get; set; }
        public double Rent {  get; set; }

        public People()
        {
        }

        public People(string name, double rent)
        {
            Name = name;
            Rent = rent;
        }

        public abstract double Tax();

    }
}
