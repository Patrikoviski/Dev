using System;
using System.Globalization;
using System.Xml.Linq;

namespace Course012
{
    class Product

    {   /* Atributos Privados*/

        private string _name;

        /* Propriedades Autoimplementadas*/

        public double Price { get; private set; }
        public int Quantity { get; private set; }

        /* Construtores*/

        public Product()
        {
            Quantity = 10;
        }

        public Product(string name, double price) : this() 
        {
            _name = name;
            Price = price;
        }

        public Product(string name, double price, int quantity) : this(name, price)
        {
            Quantity = quantity;
        }

        /* Propriedades Customizadas*/

        public string Name
        {
            get { return _name; }
            set
            {
                if (value != null && value.Length > 1)
                {
                    _name = value;
                }
            }
        }

        /*public double Price
        {
            get { return _price; }
        }

        public int Quantity
        {
            get { return _quantity; }
        }

        /*public int GetQuantity()
        {
            return _quantity;
        }*/


        /* Outros métodos de classe*/


        public  double totalValueStorage()
        {
            return Price * Quantity;
        }

        public void AddProduct(int quantity)
        {
            
            Quantity += quantity;
        }

        public void RemoveProduct(int quantity)
        {
            Quantity -= quantity;
        }

        public override string ToString()
        {
            return _name
                + ", $"
                + Price.ToString("F2", CultureInfo.InvariantCulture)
                + ", "
                + Quantity
                + " unidades, Total: $"
                + totalValueStorage().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}