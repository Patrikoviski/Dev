using Enum.Entities.Enums;

namespace Enum.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime Moment { get; set; }
        public OrderStatus Status { get; set; }

        public override string ToString()
        {
            return $"{Id}, {Moment:yyyy-MM-dd HH:mm:ss}, {Status}";
        }
    }
}