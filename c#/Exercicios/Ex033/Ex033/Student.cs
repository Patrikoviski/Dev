using System.Globalization;

namespace Ex033
{
class Student
    {
        public string Name;
        public double Note, Note2, Note3;

        public double FinalNote()
        {
            return Note + Note2 + Note3;
        }

        public bool Aprovated()
        {
            if (FinalNote() >= 60.0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public double RemaiderNote()
        {
            if (Aprovated())
            {
                return 0.0;
            }
            else
            {
                return 60.0 - FinalNote();
            }
        }
    }
}