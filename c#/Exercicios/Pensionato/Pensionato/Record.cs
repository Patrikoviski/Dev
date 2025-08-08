namespace Pensionato
{
    class Record
    {
        public string Name { get; set; }
        public string Email { get; set; }

        public Record(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public override string ToString()
        {
            return Name + ", " + Email;
        }
    }
}