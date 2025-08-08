namespace Taxes.Entities
{
    class Company : People
    {
        public int Employee {  get; set; }

        public Company()
        {
        }

        public Company(string name, double rent, int employee)
            : base(name, rent)
        {
            Employee = employee;
        }

        public override double Tax()
        {
            if (Employee > 10)
            {
                return Rent * 0.14;
            }
            else
            {
                return Rent * 0.16;
            }
        }
    }
}
