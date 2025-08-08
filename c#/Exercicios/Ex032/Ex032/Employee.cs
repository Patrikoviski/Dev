using System.Globalization;

namespace Ex032
{
class Employee
    {
        public string Name;
        public double RawSalary;
        public double Tax;

        public double LiquidSalary()
        {
            return RawSalary - Tax;
        }

        public void IncreaseSalary(double percentage)
        {
            RawSalary = RawSalary + (RawSalary * percentage / 100);
        }

        public override string ToString()
        {
            return Name
                + ", $ "
                + LiquidSalary().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}